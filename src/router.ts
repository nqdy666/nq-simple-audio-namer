import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView/HomeView.vue'
import AboutView from './views/AboutView/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
