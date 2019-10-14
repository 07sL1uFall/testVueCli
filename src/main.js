import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 在webpack中, 一切的静态资源, 都是模块, 都可以进行引入
// import './index.css'
// import './index.less'
// 如果导入vue文件, 之所以能够识别, 也是因为默认配置好了 vue-loader

// 是否要显示提示消息
Vue.config.productionTip = false

// 创建vue实例
new Vue({
  // vue底层的渲染函数, 通过App组件进行渲染视图
  // render (createElement) {
  //   return createElement(App)
  // }
  render: h => h(App),
  router
}).$mount('#app')
