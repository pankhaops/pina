import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: { doubleCount: s => s.count * 2 },
  actions: {
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 }
  }
})