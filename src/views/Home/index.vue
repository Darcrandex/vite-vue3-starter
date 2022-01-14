<script setup lang="ts">
/**
 * @name Home
 * @author darcrand
 * @description
 */

import http from '@/utils/http'
import { onMounted } from 'vue'

onMounted(() => {
  http.get('https://cnodejs.org/api/v1/topics').then(console.log)
})
</script>

<template>
  <h1>Home</h1>
</template>
