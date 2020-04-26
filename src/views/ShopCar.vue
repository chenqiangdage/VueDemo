<template>
    <div>
        <!-- 没有数据的购物车 -->
       <div v-if="!HaveDatas" class="emptyCart" style="">
            <img style="width:100px;heigth:100px" src="../assets/empty.png" alt="">
            <van-divider :style="{ color: 'black', borderColor: '#dbe2e8', padding: '0 16px' }">购物车暂无商品！</van-divider>
            <van-row>
                <van-col offset="8" span="8">
                     <van-button plain round size="large" type="danger"  @click='initData'>去逛逛</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- 有数据的购物车 -->
        <div>
            <!-- 收货地址 -->
            <div style=";height:65pt;background-color:white;margin-left:5pt;margin-top:10pt;margin-right:5pt;border-radius:8pt; ">
                   <div style="height:40pt;border-bottom:1pt dot grey">
                       <div style="display:block;height:35pt;float:left;width:10%;">
                           <van-icon name="location" size="20pt" color="red" style=" margin-top :10pt;"/>
                        </div>
                       <div style="display:block;height:35pt;float:right;width:90%;">
                           <div style="height:20pt"> 
                               <span>陈强</span> <span>  18211436586</span>
                           </div>
                           <div>
                                <div style="height:20pt"> 
                                    <span>湖南省长沙市开福区湖帆广苑101</span>
                                </div>
                           </div>
                       </div>
                   </div>
                   <div style="height:25pt;padding-left:4pt;">
                       <span style="color:#F89513;font-size:10pt;">提示:收件人必须为厂房地址,如果修改请在个人中心提交审核</span>
                   </div>
            </div>
            
            <van-row v-for="itemC in CompanyList" :key="itemC" >
                <div style="background-color:white;min-height:30pt;margin-left:5pt;margin-top:10pt;margin-right:5pt;padding:4pt;border-radius:8pt;  ">
                    <div style="height:30pt;width:100%;border-bottom :1pt solid #f9e4e4;">
                        <div style="width:10%;float:left;margin-top:5pt;margin-left:2pt;">
                            <van-checkbox v-model="checked"></van-checkbox>
                        </div>
                        <div style="width:88%;float:left;margin-top:5pt;margin-left:2pt;">
                            <span>浏阳市安倍景飒原材料有限公司</span>
                        </div>
                    </div>
                    <div>
                        <div v-for="itemC in Contentlist" :key="itemC" style="height:60pt;margin-top:5pt;background-color:white;border-bottom :1pt solid #f9e4e4;">
                            <div style="float:left;width:6%;height:40pt;margin-top:20pt;margin-left:2pt;">
                                <van-checkbox v-model="checked"></van-checkbox>
                            </div>
                            <div style="float:left;width:25%;height:60pt;">
                                <img style="border-radius:4pt;width:50pt; float:right;margin-right:4pt; height;46pt;margin-top:5pt;" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                            </div>
                            <div style="width:65%;height:60pt;float:left;font-size:12pt;">
                                <div style="width:100%;height:18pt; color:#414141">
                                    <span>1#粒子</span> <span>1#粒子</span> <span>1#粒子</span>
                                </div>
                                <div style="width:100%;height:16pt;font-size:10pt;color:#999999;">
                                    <span>150斤/包 </span><span>隔热包装</span>
                                </div>
                                <div style="width:100%;height:26pt;">
                                    <div style="float:left;height:26pt;color:red;width:40%;padding-top:3pt;">
                                        <span style="">¥30元</span>
                                    </div>
                                    <div style="float:right;height:26pt;width:60%">     
                                        <button class="IncBtn"></button>
                                            <input class="pdInputNum" value="1" />
                                        <button class="DecBtn"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-row>
            <van-cell-group style="margin:8pt 5pt;0pt 5pt;border-radius:8pt;height:40pt;border:0 0;border-width:0 0;">
                <van-cell title="共4件商品" value-class="TotalMoney" value="合计:¥4000.33"  style="padding:4pt;border-radius:8pt;" />
            </van-cell-group>
            <div style="width:100%;margin-top:10pt">
                <div style="margin:0 auto;width:90%;height:20pt">
                    <van-button type="danger" @click="showPayWay" round size="large"  >应付 ¥4000.33 ，立即下单</van-button>
                </div>
            </div>
            <van-row style="height:30pt;margin-bottom:35pt;"></van-row>
        </div>
        <van-popup closeable  close-icon-position="top-left"  position="bottom"  :style="{ height: '80%' }" v-model="showPayWayPoP">
            <van-row>
                <div style="width:100%;margin-top:10pt">
                    <div style="margin:0 auto;width:90%;height:30pt">
                        <div style=" text-align:center;margin:0 auto;width:100%;height:20pt">
                            <label style="font-size:14pt;color:#151515;">选择付款方式</label>
                        </div>
                    </div>
                </div>
            </van-row>
            <van-row style="height:40pt;margin-top:10pt;">
                <div style="width:100%;">
                    <div style="margin:0 auto;width:100%;height:40pt">
                        <div style=" text-align:center;margin:0 auto;width:100%;height:40pt">
                            <label style="font-size:30pt;color:red;">¥ 300.00</label>
                        </div>
                    </div>
                </div>
            </van-row>
            <van-row style="margin-top:10pt;">
                <van-radio-group v-model="radio">
                    <van-cell-group>
                        <van-cell title="微信支付" title-class="PayTypeTitle" clickable @click="radio = '1'"  style="30pt">
                            <template #icon>      
                                <van-icon name="checked" size="30" color="green" />
                            </template>
                            <template #right-icon>      
                               <van-radio name="1" checked-color="#E41D21">
                                </van-radio>
                            </template>
                        </van-cell>
                        <van-cell title="账户支付"  title-class="PayTypeTitle" clickable @click="radio = '2'" style="30pt">
                             <template #icon>      
                                <van-icon name="gold-coin" size="30" color="red" />
                            </template>
                            <template #right-icon>
                                <van-radio name="2" checked-color="#E41D21"/>
                            </template>
                        </van-cell>
                        <van-cell title="线下支付" title-class="PayTypeTitle" clickable @click="radio = '3'" icon="" style="30pt">
                            <template #icon>      
                                <van-icon name="phone" size="30" color="#8d8dff" />
                            </template>
                            <template #right-icon>
                                <van-radio name="3" checked-color="#E41D21"/>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </van-row>
            <van-row style="margin-top:20pt;">
            </van-row>
            <van-row style="margin-top:20pt;">
                 <div style="width:100%;margin-top:10pt">
                    <div style="margin:0 auto;width:50%;height:20pt">
                        <van-button type="danger" @click="PayIt" round size="large"  >立即付款</van-button>
                    </div>
                </div>
            </van-row>
        </van-popup>
        <van-popup v-model="offLineMessage" class="OfflineBG">
               <div >
                   <van-row style="height:40pt;">
                   </van-row>
                    <van-row style="height:40pt;">
                   </van-row>
                   <van-row style="margin-top:30pt">
                       <div style="width:100%;margin-top:10pt">
                            <div style="text-align:center;margin:0 auto;width:50%;height:20pt;font-size:16pt;">
                                <span >提交订单</span>
                            </div>
                        </div>
                   </van-row>
                    <van-row style="">
                       <div style="width:100%;margin-top:10pt">
                            <div style="text-align:center;margin:0 auto;font-size:12pt;width:80%;height:20pt;color:#666666;">
                                <span >您将在2小时内联系卖家</span>
                            </div>
                        </div>
                   </van-row>
                    <van-row style="">
                       <div style="width:100%;">
                            <div style="text-align:center;margin:0 auto;font-size:12pt;width:50%;height:20pt;color:#666666;">
                                <span >确认订单有效？</span>
                            </div>
                        </div>
                   </van-row>
                   <van-row style="">
                       <div style="width:100%;">
                            <div style="text-align:center;margin:0 auto;font-size:12pt;width:80%;height:40pt;color:#666666;">
                              <div style="float:left;width:45%;">
                                    <van-button type="danger" color="#BCC5D3" @click="CancelOffline"  round size="large"  >否</van-button>
                              </div>
                              <div style="float:right;width:45%">
                                     <van-button type="danger" @click="SureOffline" round  size="large"  >是</van-button>
                              </div>
                              
                              
                            </div>
                        </div>
                   </van-row>
               </div> 
        </van-popup>
         <van-popup v-model="UseAccount" position="bottom" closeable :style="{ height: '100%' }" class="UseAccount">
               <div >
                   <van-row style="height:40pt;">
                   </van-row>
                    <van-row style="height:40pt;">
                   </van-row>
                   <van-row style="margin-top:30pt">
                       <div style="width:100%;margin-top:10pt">
                            <div style="text-align:center;margin:0 auto;width:50%;height:20pt;font-size:16pt;">
                                <span >验证码已发送！</span>
                            </div>
                        </div>
                   </van-row>
                    <van-row style="">
                       <div style="width:100%;margin-top:10pt">
                            <div style="text-align:center;margin:0 auto;font-size:12pt;width:100%;height:20pt;color:#666666;">
                                <span >请到您预留手机号码为</span><span style="color:red">18211436586</span><span>的设备查看！</span>
                            </div>
                        </div>
                   </van-row>
                   
                    <van-row style="background-color:#f7f1f1;padding:15pt;">
                        <van-password-input :mask="false"  info="请妥善保管验证码！有效期1分钟！" :focused="showKeyboard" :value="UseAccountCode"  :length="4" :gutter="15"   @focus="showKeyboard = true"/>
                        <van-number-keyboard  :show="showKeyboard"  @input="onInput"  @delete="onDelete"  @blur="showKeyboard = false"/>
                   </van-row>
                   
                   <van-row style="margin-top:20pt;">
                       <div style="width:100%;">
                            <div style="text-align:center;margin:0 auto;font-size:12pt;width:100%;height:40pt;color:#666666;">
                              <div style="width:80%;margin:0 auto;">
                                    <van-button type="danger" @click="UserAccountDoOrder"  round size="large"  >验证</van-button>
                              </div>
                              
                              
                            </div>
                        </div>
                   </van-row>
               </div> 
        </van-popup>
    </div>
</template>
<script>
import Vue from 'vue';    
import { Divider } from 'vant';
import { Button } from 'vant';
import { Panel } from 'vant';
import { Toast } from 'vant';
import { Icon } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Icon);
import { getTodayMenuDetail } from '../server/api/index'
Vue.use(Panel);
Vue.use(Button);
Vue.use(Divider);
export default {
    data(){
        return {
            showKeyboard: true,
            UseAccountCode:"",
            offLineMessage:false,
            radio: '1',
            showPayWayPoP:false,
            UseAccount :false,
            CompanyList:[1,2,3],
            checked:true,
            Contentlist:[1,2,3],
            HaveDatas:true
        }
    },
    methods:{
        UserAccountDoOrder(){
            Toast("验证验证码，并生成订单");
             this.showPayWayPoP= false;
            this.UseAccount = false;
        },
        onInput(key) {
            this.UseAccountCode = (this.UseAccountCode + key).slice(0, 4);
        },
        onDelete() {
            this.UseAccountCode = this.UseAccountCode.slice(0, this.UseAccountCode.length - 1);
        },
        SureOffline(){
            this.offLineMessage= false;
            this.showPayWayPoP = false;
            Toast("生成一个线下单");
        },
        CancelOffline(){
            this.offLineMessage = false;
            this.showPayWayPoP = false;
        },
        showPayWay(){
            this.showPayWayPoP = true;
        },
        PayIt()
        {
            switch(this.radio)
            {
                case "1":
                    Toast("唤起微信支付");
                    break;
                case "2":
                    Toast("使用账户支付");
                    this.UseAccount = true;
                    break;
                case "3":
                    Toast("线下支付");
                    this.offLineMessage= true;
                    break;    
            }

        }
    }
}
</script>
<style>
.OfflineBG{
    background-image: url("../assets/OfflineBg.png");
    background-size:100% 100% ;
    background-color: #ffffff00;
    width:220pt;
    height:250pt;
}
.PayTypeTitle{
    margin: 2pt 2pt 2pt 10pt;
    font-size: 14pt;
}
.PayWayClass{
    color:#999999;
}
.TotalMoney{
    color:red;
}
.emptyCart {
    min-height: 700px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: #f7f4f8;
}
.emptyCart img {
    padding-top: 1rem;
    width: 50%;
    height: 6rem;
    margin: 0 auto;
}
.DecBtn{
    float:right;
    height:20pt;
    width:20pt;
    margin: 5pt 0pt 0pt 5pt;
    background-size:cover;
    border:0pt;
    background: url('../assets/dec.png') no-repeat;
}
.IncBtn{
    float:right;
    height:20pt;
    width:20pt;
    margin: 5pt 0pt 0pt 5pt;
    background-size:cover;
    border:0pt;
    background: url('../assets/inc.png') no-repeat;
}
.pdInputNum{
    float:right;
    width:20pt;
    height: 14pt;
    padding:0pt 0pt 0pt 10pt;
    margin: 1pt 1pt 6pt 1pt;
    border:0pt 0pt;
}
  
</style>