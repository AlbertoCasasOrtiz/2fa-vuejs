import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginApp from '@/views/Login.vue'
import RegisterApp from '@/views/Register.vue'
import HomeApp from '@/views/Home.vue'
import ForgotApp from '@/views/Forgot.vue'
import ResetApp from '@/views/Reset.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: HomeApp},
  {path: '/login', component: LoginApp},
  {path: '/register', component: RegisterApp},
  {path: '/forgot', component: ForgotApp},
  {path: '/reset/:token', component: ResetApp}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
