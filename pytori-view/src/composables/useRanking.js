import { computed } from 'vue';
export function useRanking(items) {
    return computed(() => [...items.value].sort((a, b) => b.score - a.score));
}
//# sourceMappingURL=useRanking.js.map