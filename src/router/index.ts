/*
 * @Author: your name
 * @Date: 2021-08-16 15:43:09
 * @LastEditTime: 2021-08-26 15:22:39
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置文件
 * @FilePath: /study-demo/vite-vue3-starter/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Vuex from "@/views/vuex.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
