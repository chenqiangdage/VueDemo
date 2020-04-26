<template>
    <div>
        <van-nav-bar  title="企业认证"  left-text="返回"  right-text=""  left-arrow  @click-left="onClickLeft"  />
        <van-field v-model="CompanyName" label="公司名称" input-align="right" placeholder="请输入公司的名称"/>
         <van-row>
            <van-col span="8">
                <van-field name="uploader"  input-align="right" label-class="widthClass">
                    <template #label>
                        <van-row>
                            <label>营业执照</label>
                        </van-row>
                        <van-row>
                        <van-uploader v-model="YingYeZhiZhao" :max-count="1"/>  
                        </van-row>
                    </template>
                </van-field>
            </van-col>
            <van-col span="8">
                   <van-field name="uploader"  input-align="right" label-class="widthClass">
                    <template #label>
                        <van-row>
                            <label>安全生产许可证</label>
                        </van-row>
                        <van-row>
                        <van-uploader v-model="SafeMakeLices" :max-count="1"/>  
                        </van-row>
                    </template>
                </van-field>
            </van-col>
            <van-col span="8">
                  <van-field name="uploader"  input-align="right" label-class="widthClass">
                    <template #label>
                        <van-row>
                            <label>安全经营许可证</label>
                        </van-row>
                        <van-row>
                        <van-uploader v-model="SageBuinessLices" :max-count="1"/>  
                        </van-row>
                    </template>
                </van-field>
            </van-col>
        </van-row>
        
       
       
        <van-row style="margin-top:10pt"></van-row>
        <van-field v-model="LawMan" label="法人姓名" input-align="right" placeholder="请输入公司的法人名称"/>
        <van-field v-model="LawManTel" label="联系方式" input-align="right" placeholder="请输入公司的法人手机号"/>
        <van-row>
            <van-col span="12">
                 <van-field name="uploader" label="身份证正面" input-align="right" label-class="widthClass">
                      <template #label>
                        <van-row>
                            <label>身份证正面</label>
                        </van-row>
                        <van-row>
                        <van-uploader v-model="IdCardFront" :max-count="1"/>  
                        </van-row>
                    </template>
                </van-field>
            </van-col>
            <van-col span="12">
                 <van-field name="uploader" label="身份证正面" input-align="right" label-class="widthClass">
                      <template #label>
                        <van-row>
                            <label>身份证反面</label>
                        </van-row>
                        <van-row>
                        <van-uploader v-model="IdCardBack" :max-count="1"/>  
                        </van-row>
                    </template>
                </van-field>
            </van-col>
        </van-row>
 
        <div style="width:100%;margin-top:10pt">
            <div style="margin:0 auto;width:100pt">
                <van-button type="danger" round size="large" to="/CompanyContactAuth" >下一步</van-button>
            </div>
        </div>
       <van-row style="margin-top:40pt"></van-row>
    </div>
</template>
<script>
import Vue from 'vue';
import { Field } from 'vant';
import { Col, Row } from 'vant';
import { NavBar } from 'vant';
import {uploader} from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(uploader);
Vue.use(NavBar);
Vue.use(Col,Row);
Vue.use(Field);
export default {
    data()
    {
        return{
            CompanyName:"",
            LawManTel:"",
            LawMan:"",
            IdCardBack:[],
            IdCardFront:[],
            YingYeZhiZhao:[],
            SafeMakeLices:[],
            SageBuinessLices:[],
        }    
    },
    methods:{
        onClickLeft()
        {
            this.$router.back();   
        }
    },
    mounted() {
        this.$emit('showfooter', false);
    }
}
</script>
<style >
.widthClass
{
    width:120pt;
}
</style>