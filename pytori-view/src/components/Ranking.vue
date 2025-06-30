<!-- src/components/Ranking.vue -->
<template>
  <div class="ranking-container">
    <RankingHeader @randomize="randomizeScores" />

    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Bar } from 'vue-chartjs'
import type { ChartData, ChartOptions } from 'chart.js'
import RankingHeader from './RankingHeader.vue'
import { useRanking, type RankingItem } from '@/composables/useRanking'

const router = useRouter()

const items = ref<RankingItem[]>([
  { id: 1, team: '大阪', test: 'リポジトリA', score: 8 },
  { id: 2, team: '東京', test: 'リポジトリA', score: 7 },
  { id: 3, team: '大阪', test: 'リポジトリB', score: 5 },
  { id: 4, team: '佐賀', test: 'リポジトリA', score: 4 },
  { id: 5, team: '佐賀', test: 'リポジトリB', score: 1 },
  { id: 6, team: '佐賀', test: 'リポジトリC', score: 3 },  
])

const sortedItems = useRanking(items)

const randomizeScores = () => {
  items.value.forEach(item => {
    item.score = Math.floor(Math.random() * 15) + 1
  })
}

const chartData = computed<ChartData<'bar'>>(() => ({
  labels: sortedItems.value.map((item, idx) =>
    `${idx === 0 ? '👑 ' : ''}${idx + 1}位 ${item.team}: ${item.test}`
  ),
  datasets: [
    {
      label: 'スコア',
      data: sortedItems.value.map(i => i.score),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
}))

const chartOptions = {
  indexAxis: 'y' as const,
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: '順位（リポジトリ別）' },
  },
  onClick: (_, elements) => {
    if (!elements.length) return
    const idx = elements[0].index
    const item = sortedItems.value[idx]
    router.push({ name: 'Shiritori', params: { id: item.id }} )
  },
  scales: {
    x: { beginAtZero: true, title: { display: true, text: 'スコア' } },
    y: { title: { display: false } },
  },
} satisfies ChartOptions<'bar'>
</script>

<style scoped>
.ranking-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
}

.chart-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
