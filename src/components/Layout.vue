<template>
    <div id="app">   
      <div style=""></div>  
        <div style=""> 
          <router-view   @showfooter="ShowFooter"  ></router-view>
        </div>
      <FootBar v-if="footer_show"></FootBar>  
    </div>
</template>

<script>
import FootBar from './Foot'
export default {
    vuex: {
        getters: {},
        actions: {}
    },
    methods:{
      //是否显示底部
      ShowFooter(bool) {
          this.footer_show = bool;
      }
    },
    components:{FootBar},
    props: {},
    data() {
        return {
          footer_show:true 
        }
    },   
}
</script>