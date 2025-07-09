<template>
    <div class="ranking-header">
      <RankingDate />
      <RandomButton class="random-button" @randomize="$emit('randomize')" />
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
    padding: 16px;
    margin-bottom: 24px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .ranking-date h2 {
    margin: 0;
    font-size: 1.1rem;
    color: #333333;
  }

  .random-button {
    padding: 8px 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: #ffffff;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .random-button:hover {
  background-color: #0056b3;
  }

@media (max-width: 600px) {
  .ranking-header {
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 12px;
  }
  .ranking-date h2 {
    font-size: 1rem;
  }
  .random-button {
    margin-top: 0;
    margin-left: auto;
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
  </style>
  