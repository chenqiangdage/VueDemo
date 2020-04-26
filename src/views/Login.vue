<template>
 <div style="background-color:white;height:600pt;"> 
    <div class="background" style="width:100%;height:200pt">
            <div  class="logininput">
                <div class="logininputTitle">
                    <h2 style="margin:5pt 5pt ">花炮小兵</h2>
                </div> 
                <van-cell-group :border='false' style="padding-left:40pt;padding-top:10pt;padding-right:40pt;">
                    <van-field style="border-bottom:2px solid #f9dddc" v-model="userName" placeholder="请输入账号" />
                </van-cell-group>
                <van-cell-group :border='false' style="padding-left:40pt;padding-top:10pt;padding-right:40pt;border: 0 solid #ffffff;">
                    <van-field style="border-bottom:2px solid #f9dddc" type="password" v-model="Password" placeholder="请输入密码" >
                        <span slot="button" ><router-link to="/ForgetPwd" style="color:red">忘记密码？ </router-link> </span>
                    </van-field>
                </van-cell-group>
                 <van-cell-group :border='false' style="padding-left:40pt;padding-top:20pt;padding-right:40pt;">
                    <van-button round type="danger" size="large" style="height:30pt">登陆</van-button>
                </van-cell-group>
            </div>
    </div>
    <div style="position:relative;top:125pt;width:100%;height:30pt; ">
         <div style="margin: 0 auto;width:120pt;">
            <span>还没有账号? </span> <span > <router-link to="/Regist" style="color:red">立即注册 </router-link>  </span>
        </div>
    </div>
 </div> 
</template>
<script>
import Vue from 'vue';
import { Panel } from 'vant';
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Panel);
export default {
    data(){
        return {
            needBoard:false,
            userName:"",
            Password:""
        }
    },
     mounted() {
            this.$emit('showfooter', false);
        }
}
</script>
<style>
body{
    background-color: white;
}
.background{
    background: url('../assets/loginBg.png') no-repeat;
    background-size:100% 100%;  
    width: 118px;
    height: 39px;
    background-color: white;
}
.logininput{
    box-shadow: darkgrey 1px 2px 2px 1px ;
    position: relative; 
    margin: 0 auto;
    top:80pt; 
    width:220pt;
    background-color:white;
    height:220pt;
    border-radius:10px;
}
.logininputTitle{
    text-align:center;
    padding-top:10pt;
}
.logininputTitle h1{
    color:#333333;
}
</style>