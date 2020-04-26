<template>   
  <van-tabbar  active-color="#07c160" route>
      <van-tabbar-item replace to="/Home" icon="wap-home">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/ShopCar" icon="cart">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/Me" icon="manager">
        我的
      </van-tabbar-item>
  </van-tabbar>
</template>
<style>
</style>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  vuex: {
    getters: {},
    actions: {}
  },
  props: {},
  data() {
      return {
      }
  },  
  methods:{
  }
}
</script>