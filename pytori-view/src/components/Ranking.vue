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
import { Bar } from 'vue-chartjs'
import type { ChartData, ChartOptions } from 'chart.js'
import RankingHeader from './RankingHeader.vue'
import { useRanking, type RankingItem } from '@/composables/useRanking'

const items = ref<RankingItem[]>([
  { team: '大阪', test: 'リポジトリA', score: 8 },
  { team: '東京', test: 'リポジトリA', score: 7 },
  { team: '大阪', test: 'リポジトリB', score: 5 },
  { team: '佐賀', test: 'リポジトリA', score: 4 },
  { team: '佐賀', test: 'リポジトリB', score: 1 },
  { team: '佐賀', test: 'リポジトリC', score: 3 },

  
])

const sortedItems = useRanking(items)

const randomizeScores = () => {
  items.value.forEach((item: RankingItem) => {
    item.score = Math.floor(Math.random() * 15) + 1
  })
}

// 順位付けロジック（同率順位対応、👑付与）
function getRankedLabels(items: RankingItem[]) {
  let labels: string[] = []
  let prevScore: number | null = null
  let rank = 0
  let displayRank = 1
  let sameRankCount = 0

  // 1位のスコアを取得
  const topScore = items.length > 0 ? items[0].score : null

  items.forEach((item, idx) => {
    if (prevScore === null || item.score !== prevScore) {
      // 新しいスコアの場合、順位を進める
      rank = displayRank
      sameRankCount = 1
    } else {
      // 同じスコアの場合、順位は同じ
      sameRankCount++
    }

    // 👑は1位の人全員につける
    const crown = (item.score === topScore && topScore !== null) ? '👑 ' : ''
    labels.push(`${crown}${rank}位 ${item.team}: ${item.test}`)

    prevScore = item.score
    displayRank += (sameRankCount === 1) ? 1 : 0 // 同率の場合は順位を飛ばすため、加算しない

    // 次のループで順位を飛ばすため、同率でなければdisplayRankをrank+1にする
    if (idx + 1 < items.length) {
      if (items[idx + 1].score !== item.score) {
        displayRank = rank + sameRankCount
        sameRankCount = 0
      }
    }
  })
  return labels
}

const chartData = computed<ChartData<'bar'>>(() => ({
  labels: getRankedLabels(sortedItems.value),
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

