import { computed, Ref } from 'vue'

export interface RankingItem {
  id: number
  team: string
  test: string
  score: number
}

export function useRanking(items: Ref<RankingItem[]>) {
  return computed(() =>
    [...items.value].sort((a, b) => b.score - a.score)
  )
}
