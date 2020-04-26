<template>
 <div style="background-color:white;height:600pt;"> 
    <div class="background" style="width:100%;height:200pt">
            <div  class="ForgetPwdinput">
                <div class="ForgetPwdinputTitle">
                    <h2 style="margin:5pt 5pt " >花炮小兵</h2>
                </div> 
                <van-cell-group :border='false' style="padding-left:30pt;padding-top:10pt;padding-right:30pt;">
                    <van-field style="border-bottom:2px solid #f9dddc" v-model="userName" placeholder="请输入账号" />
                </van-cell-group>
                <van-cell-group :border='false' style="padding-left:30pt;padding-top:10pt;padding-right:30pt;border: 0 solid #ffffff;">
                    <van-field style="border-bottom:2px solid #f9dddc"  v-model="Password" placeholder="请输入绑定手机" />
                </van-cell-group>
                <van-cell-group :border='false' style="padding-left:30pt;padding-top:10pt;padding-right:30pt;border: 0 solid #ffffff;">
                    <van-field style="border-bottom:2px solid #f9dddc"  v-model="Password" placeholder="请输入验证码" >
                        <van-button slot="button" plain size="small" type="danger">发送验证码</van-button>
                    </van-field>
                </van-cell-group>
                 <van-cell-group :border='false' style="padding-left:30pt;padding-top:10pt;padding-right:30pt;border: 0 solid #ffffff;">
                    <van-field style="border-bottom:2px solid #f9dddc"  v-model="Password" placeholder="请输入密码" />
                </van-cell-group>
                <van-cell-group :border='false' style="padding-left:40pt;padding-top:20pt;padding-right:40pt;">
                    <van-button round type="danger" size="large" style="height:30pt">重置</van-button>
                </van-cell-group>
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
.ForgetPwdinput{
    box-shadow: darkgrey 1px 2px 2px 1px ;
    position: relative; 
    margin: 0 auto;
    top:80pt; 
    width:220pt;
    background-color:white;
    height:300pt;
    border-radius:10px;
}
.ForgetPwdinputTitle{
    text-align:center;
    padding-top:10pt;
}
.ForgetPwdinputTitle h2{
    color:#333333;
}
</style>