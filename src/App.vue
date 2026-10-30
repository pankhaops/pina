<script setup>
import { ref } from 'vue'
import { useCounterStore } from './stores/counterStore'
import { useTodoStore } from './stores/todoStore'

const c = useCounterStore()
const t = useTodoStore()
const task = ref('')

function add() {
  if (task.value.trim()) {
    t.add(task.value)
    task.value = ''
  }
}
</script>

<template>
  <h1>Pinia State Management</h1>

  <h2>Counter: {{ c.count }}</h2>
  <p>Double: {{ c.doubleCount }}</p>
  <button @click="c.increment">+</button>
  <button @click="c.decrement">-</button>
  <button @click="c.reset">Reset</button>

  <h2>Todo List</h2>
  <input v-model="task" placeholder="Enter task">
  <button @click="add">Add</button>

  <p>Total: {{ t.total }} | Completed: {{ t.completed.length }} | Pending: {{ t.pending.length }}</p>

  <ul>
    <li v-for="x in t.todos" :key="x.id">
      <input type="checkbox" :checked="x.completed" @change="t.toggle(x.id)">
      {{ x.title }}
      <button @click="t.remove(x.id)">Delete</button>
    </li>
  </ul>
</template>