<template>
    <h2>現在のランキング表（{{ formattedDate }}）</h2>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
  const formattedDate = computed(() => dateFormatter.format(new Date()))
  </script>
  
  <style scoped>
  h2 {
    margin: 0;
  }
  </style>
  