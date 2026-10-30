import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] }),

  getters: {
    completed: s => s.todos.filter(t => t.completed),
    pending: s => s.todos.filter(t => !t.completed),
    total: s => s.todos.length
  },

  actions: {
    add(title) {
      this.todos.push({ id: Date.now(), title, completed: false })
    },
    remove(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    toggle(id) {
      this.todos.find(t => t.id === id).completed = !this.todos.find(t => t.id === id).completed
    }
  }
})