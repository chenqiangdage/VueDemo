// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import Layout from './components/Layout.vue'
import store from './store/store'
//图片懒加载
import {Lazyload} from 'vant'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Lazyload)
Vue.use(Layout)

new Vue({
  router,
  store,
  render: h => h(Layout)
}).$mount('#app')