<template>
  <!-- 配置渲染的模板的 -->
  <div id="app">
    <div class="box">
      <div class="son">你好哇</div>
    </div>
    <div>{{ msg }}</div>
    <button @click="fn">按钮</button>
    <hr>

    <router-link to="/login">登陆</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 导出一个对象, 导出的对象, 就是将来组件的配置项
// Vue.component('组件名', 组件的配置项)
// 之前的组件配置的内容, 在这个对象中, 都可以写, 比如: data, methods, computed, ....
// 但是除了 template, template已经在上面配置好了
export default {
  data () {
    return {
      msg: '测试'
    }
  },
  methods: {
    fn () {
      console.log('呵呵')
    }
  }
}
</script>

<style lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
  .son {
    width: 100px;
    height: 50px;
    background-color: skyblue;
  }
}

</style>
