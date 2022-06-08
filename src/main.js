import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible' //加载动态设置 REM 基准值
import './styles/index.less' //全局加载样式

import Vant from 'vant' //加载 want 核心组件库
import 'vant/lib/index.css' //加载 vant 全局样式

Vue.use(Vant) //注册使用 vant 组件库

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
