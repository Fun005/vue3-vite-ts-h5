import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"
import Pinia from "@/views/Pinia.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pinia",
    name: "Pinia",
    component: Pinia
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/views/Axios.vue") // 懒加载组件
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test.vue") // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
