import { defineStore } from 'pinia'
import { ref } from 'vue'

function sleep(ms = 100) {
  return new Promise<void>((resolve) => {
    const t = setTimeout(() => {
      clearTimeout(t)
      resolve()
    }, ms)
  })
}

export const useCounter = defineStore('counter', () => {
  const count = ref(0)
  const add = () => count.value++
  const sub = async () => {
    await sleep(2000)
    count.value--
  }

  return { count, add, sub }
})
