<script setup lang="ts">
/**
 * @name Counter
 * @author darcrand
 * @description
 */

import { useCounter } from '@/stores/counter'
const counter = useCounter()
</script>

<template>
  <h1 class="m-2 text-2xl">Counter</h1>
  <p class="m-2">count: {{ counter.count }}</p>
  <button
    class="m-2 px-1 rounded border-2 border-red-400 text-red-500"
    @click="counter.add"
  >
    Add
  </button>
  <button
    class="m-2 px-1 rounded border-2 border-red-400 text-red-500"
    @click="counter.sub"
  >
    Sub
  </button>
</template>
