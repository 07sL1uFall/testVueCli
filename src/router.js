import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Register from './components/Register.vue'

// 只要是基于vue的插件, 如果是结合着模块化来开发的, 必须要use一下, 才能使用
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})

export default router
