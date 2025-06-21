<template>
    <div class="ranking-header">
      <RankingDate />
      <RandomButton @randomize="$emit('randomize')" />
    </div>
  </template>
  
  <script setup lang="ts">
  import RankingDate from '@/components/RankingDate.vue'
  import RandomButton from '@/components/RandomButton.vue'

  const emit = defineEmits<{
    (e: 'randomize'): void
  }>()
  </script>
  
  <style scoped>
  .ranking-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  </style>
  