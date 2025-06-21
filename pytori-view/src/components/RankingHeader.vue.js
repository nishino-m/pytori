import RankingDate from '@/components/RankingDate.vue';
import RandomButton from '@/components/RandomButton.vue';
const emit = defineEmits();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "ranking-header" },
});
/** @type {[typeof RankingDate, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(RankingDate, new RankingDate({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof RandomButton, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(RandomButton, new RandomButton({
    ...{ 'onRandomize': {} },
}));
const __VLS_4 = __VLS_3({
    ...{ 'onRandomize': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
let __VLS_6;
let __VLS_7;
let __VLS_8;
const __VLS_9 = {
    onRandomize: (...[$event]) => {
        __VLS_ctx.$emit('randomize');
    }
};
var __VLS_5;
/** @type {__VLS_StyleScopedClasses['ranking-header']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RankingDate: RankingDate,
            RandomButton: RandomButton,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=RankingHeader.vue.js.map