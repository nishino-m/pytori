<template>
    <button @click="$emit('randomize')">実験</button>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits<{
    (e: 'randomize'): void
  }>()
  </script>
  
  <style scoped>
  button {
    padding: 6px 12px;
    cursor: pointer;
  }
  </style>
  