import { ref, computed } from 'vue';
import { Bar } from 'vue-chartjs';
import RankingHeader from './RankingHeader.vue';
import { useRanking } from '@/composables/useRanking';
const items = ref([
    { team: '大阪', test: 'リポジトリA', score: 8 },
    { team: '東京', test: 'リポジトリA', score: 7 },
    { team: '大阪', test: 'リポジトリB', score: 5 },
    { team: '佐賀', test: 'リポジトリA', score: 4 },
    { team: '佐賀', test: 'リポジトリB', score: 1 },
    { team: '佐賀', test: 'リポジトリC', score: 3 },
]);
const sortedItems = useRanking(items);
const randomizeScores = () => {
    items.value.forEach(item => {
        item.score = Math.floor(Math.random() * 15) + 1;
    });
};
const chartData = computed(() => ({
    labels: sortedItems.value.map((item, idx) => `${idx === 0 ? '👑 ' : ''}${idx + 1}位 ${item.team}: ${item.test}`),
    datasets: [
        {
            label: 'スコア',
            data: sortedItems.value.map(i => i.score),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
    ],
}));
const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
        legend: { display: false },
        title: { display: true, text: '順位（リポジトリ別）' },
    },
    scales: {
        x: { beginAtZero: true, title: { display: true, text: 'スコア' } },
        y: { title: { display: false } },
    },
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "ranking-container" },
});
/** @type {[typeof RankingHeader, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(RankingHeader, new RankingHeader({
    ...{ 'onRandomize': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onRandomize': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onRandomize: (__VLS_ctx.randomizeScores)
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "chart-container" },
});
const __VLS_7 = {}.Bar;
/** @type {[typeof __VLS_components.Bar, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    data: (__VLS_ctx.chartData),
    options: (__VLS_ctx.chartOptions),
}));
const __VLS_9 = __VLS_8({
    data: (__VLS_ctx.chartData),
    options: (__VLS_ctx.chartOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['ranking-container']} */ ;
/** @type {__VLS_StyleScopedClasses['chart-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Bar: Bar,
            RankingHeader: RankingHeader,
            randomizeScores: randomizeScores,
            chartData: chartData,
            chartOptions: chartOptions,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Ranking.vue.js.map