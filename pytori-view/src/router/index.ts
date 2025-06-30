import { createRouter, createWebHistory } from 'vue-router'
import Ranking from '../components/Ranking.vue'
import Shiritori from '../components/Shiritori.vue'

const routes = [
    { path: '/', name: 'Ranking', component: Ranking },
    { path: '/shiritori/:id', name: 'Shiritori', component: Shiritori, props: true },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
  })