<template>
    <div>
        <van-nav-bar  title="企业认证"  left-text="返回"  right-text=""  left-arrow  @click-left="onClickLeft"  />
        <van-field v-model="Contact" label="联系姓名" input-align="right" placeholder="请输入联系人名称"/>
        <van-field v-model="ContactTel" label="联系方式" input-align="right" placeholder="请输入联系人手机号"/>
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
        <van-row style="margin-top:10pt"></van-row>
        <van-field v-model="BandCard" label="对公账号" input-align="right" placeholder="请输入对公账号"/>
        <van-field v-model="BankName" label="开户行" input-align="right" placeholder="请输入开户行"/>
        <van-row style="margin-top:10pt"></van-row>
        <van-field v-model="ReceiveAddress" label="收货地址" input-align="right" placeholder="请输入收货地址"/>
        <div style="height:50pt;width:100%;border-bottom:1px solid #ecedf1">     
            <div style="height:20pt;width:100%; background-color:white;">
                <span style="margin-left:10pt;font-size:10pt;">库存容量限量（单位 /吨)</span>
            </div>
             <div style="height:30pt;width:100%; background-color:white;">
                <div style="display:block;float:left;width:35%">
                    <span style="margin-left:10pt;font-size:10pt;">黑火药</span>
                    <input style="width:36pt;background-color:#f5f5fa;border-radius:5pt;border:1px solid red" v-model="BlackPowderCount"/>
                </div>
                 <div style="display:block;float:left;width:32%">
                    <span style="font-size:10pt;">引火线</span>
                    <input style="width:36pt;background-color:#f5f5fa;border-radius:5pt;border:1px solid red" v-model="GuidWireCount"/>
                </div>
                <div style="display:block;float:right;width:33%">
                    <span style="font-size:10pt;">危化品</span>
                    <input style="width:36pt;background-color:#f5f5fa;border-radius:5pt;border:1px solid red" v-model="DangerThingCount"/>
                </div>
            </div>
        </div>
        <van-field name="uploader" label="工厂设计图"  input-align="right" label-class="widthClass">
            <template #input><van-uploader v-model="FactoryDesignPic" :max-count="1"/>  </template>
       </van-field>
        <div style="width:100%;margin-top:10pt">
            <div style="margin:0 auto;width:100pt">
                <van-button type="danger" round size="large" to="/CompanyContactAuth" >提交</van-button>
            </div>
        </div>
       <van-row style="margin-bottom:40pt"></van-row>
    </div>
</template>
<script>
import Vue from 'vue';
import { Field } from 'vant';
import { Col, Row } from 'vant';
import { NavBar } from 'vant';
import {uploader} from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(uploader);
Vue.use(NavBar);
Vue.use(Col,Row);
Vue.use(Field);
export default {
    data()
        {
        return{
            GuidWireCount:0.00,
            DangerThingCount:0.00,
             BlackPowderCount:0.00,
            Contact:"",
            ContactTel:"",
            BandCard:"",
            BankName:"",
            IdCardBack:[],
            IdCardFront:[],
            ReceiveAddress:"",
            FactoryDesignPic:[],
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
.SmallWidthClass
{
    width:40pt;
}
</style>