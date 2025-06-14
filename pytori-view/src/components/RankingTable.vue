<template>
    <div class="ranking-table">
      <h2>現在のランキング({{ formattedDate }})</h2>
      <table>
        <thead>
          <tr>
            <th>順位</th>
            <th>チーム</th>
            <th>スコア</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in sortedItems" :key="item.team + item.test">
            <td>{{ idx + 1 }}</td>
            <td>{{ item.team }}: {{ item.test }}</td>
            <td>{{ item.score }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="randomizeScores">❤️‍🔥</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from 'vue'
  import { RankingItem, useRanking } from '@/composables/useRanking'
  import './RankingTable.css'
  
  //本番はDBから取得するらしい
  const items = ref<RankingItem[]>([
    { team: 'チームA', test: 'リポジトリ1', score: 8 },
    { team: 'チームB', test: 'リポジトリ1', score: 7 },
    { team: 'チームA', test: 'リポジトリ2', score: 5 },
    { team: 'チームC', test: 'リポジトリ2', score: 4 },
    { team: 'チームC', test: 'リポジトリ1', score: 1 },
  ])
  
  const sortedItems = useRanking(items)

  const dateFormatter = new Intl.DateTimeFormat('ja', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  const formattedDate = computed(() => dateFormatter.format(new Date()))

  function randomizeScores() {
  items.value.forEach(item => {
    item.score = Math.floor(Math.random() * 15) + 1
  })
}
  </script>
