<template>
    <van-tabs v-model="active">
        <van-tab title="付款状态">
            <van-row style=" background-color:white;border-radius:4pt;padding:5pt 5pt 0pt 5pt;margin:5pt 5pt;">
                    <div style="height:20pt;width:100%;border-bottom :1pt solid #f9e4e4;">
                    <div style="width:95%;margin-top:5pt;margin-left:12pt;">
                        <span>浏阳市安倍景飒原材料有限公司</span>
                    </div>  
                </div>
                <div v-for="itemC in [1,2,3]" :key="itemC" style="height:60pt;background-color:white;">
                    <div>    
                        <div style="float:left;width:25%;height:60pt;">
                            <img style="border-radius:4pt;width:50pt; float:left;margin-left:14pt; height;46pt;margin-top:5pt;" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                        </div>
                        <div style="width:70%;height:60pt;float:left;font-size:12pt;">
                            <div style="width:100%;height:20pt;margin-top:3pt; color:#414141">
                                <span>军工粉</span> <span style="float:right">X 1</span>
                            </div>
                            <div style="width:100%;height:14pt;font-size:10pt;color:#999999;">
                                <span>150斤/包 </span><span>隔热包装</span>
                            </div>
                            <div style="width:100%;height:26pt;">
                                <div style="float:right;height:26pt;color:red;width:40%;padding-top:3pt;">
                                    <span style="float:right;">¥30元</span>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
                    <div style="background-color:white;width:100%;height:90pt;border-top :1pt solid #f9e4e4;">
                        <div style="height:88pt;width:70%;float:left;">
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">订单编号: </span><span>1234456781937</span>
                        </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">下单日前: </span><span>2020-01-12 12:22:11</span>
                            </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">流水单号: </span><span>7744229282823823</span>
                            </div>
                        </div>
                        <div style="height:88pt;width:28%;float:left;">
                        <van-button  style="margin-top:45pt;" color="#F9AC58"  round size="large"  >待付款</van-button>
                        </div>
                    </div>
            </van-row>
             <van-row style=" background-color:white;border-radius:4pt;padding:5pt 5pt 0pt 5pt;margin:5pt 5pt;">
                    <div style="height:20pt;width:100%;border-bottom :1pt solid #f9e4e4;">
                    <div style="width:95%;margin-top:5pt;margin-left:12pt;">
                        <span>浏阳市安倍景飒原材料有限公司</span>
                    </div>  
                </div>
                <div v-for="itemC in [1,2,3]" :key="itemC" style="height:60pt;background-color:white;">
                    <div>    
                        <div style="float:left;width:25%;height:60pt;">
                            <img style="border-radius:4pt;width:50pt; float:left;margin-left:14pt; height;46pt;margin-top:5pt;" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                        </div>
                        <div style="width:70%;height:60pt;float:left;font-size:12pt;">
                            <div style="width:100%;height:20pt;margin-top:3pt; color:#414141">
                                <span>军工粉</span> <span style="float:right">X 1</span>
                            </div>
                            <div style="width:100%;height:14pt;font-size:10pt;color:#999999;">
                                <span>150斤/包 </span><span>隔热包装</span>
                            </div>
                            <div style="width:100%;height:26pt;">
                                <div style="float:right;height:26pt;color:red;width:40%;padding-top:3pt;">
                                    <span style="float:right;">¥30元</span>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
                    <div style="background-color:white;width:100%;height:90pt;border-top :1pt solid #f9e4e4;">
                        <div style="height:88pt;width:70%;float:left;">
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">订单编号: </span><span>1234456781937</span>
                        </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">下单日前: </span><span>2020-01-12 12:22:11</span>
                            </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">流水单号: </span><span>7744229282823823</span>
                            </div>
                        </div>
                        <div style="height:88pt;width:28%;float:left;">
                        <van-button  style="margin-top:45pt;" color="#F9AC58"  round size="large"  >待确认</van-button>
                        </div>
                    </div>
            </van-row>
            <van-row style="margin-bottom:40pt;"></van-row>
        </van-tab>
        <van-tab title="审核状态">
            <van-row style=" background-color:white;border-radius:4pt;padding:5pt 5pt 0pt 5pt;margin:5pt 5pt;">
                    <div style="height:20pt;width:100%;border-bottom :1pt solid #f9e4e4;">
                    <div style="width:95%;margin-top:5pt;margin-left:12pt;">
                        <span>浏阳市安倍景飒原材料有限公司</span>
                    </div>  
                </div>
                <div v-for="itemC in [1,2,3]" :key="itemC" style="height:60pt;background-color:white;">
                    <div>    
                        <div style="float:left;width:25%;height:60pt;">
                            <img style="border-radius:4pt;width:50pt; float:left;margin-left:14pt; height;46pt;margin-top:5pt;" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                        </div>
                        <div style="width:70%;height:60pt;float:left;font-size:12pt;">
                            <div style="width:100%;height:20pt;margin-top:3pt; color:#414141">
                                <span>军工粉</span> <span style="float:right">X 1</span>
                            </div>
                            <div style="width:100%;height:14pt;font-size:10pt;color:#999999;">
                                <span>150斤/包 </span><span>隔热包装</span>
                            </div>
                            <div style="width:100%;height:26pt;">
                                <div style="float:right;height:26pt;color:red;width:40%;padding-top:3pt;">
                                    <span style="float:right;">¥30元</span>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
                    <div style="background-color:white;width:100%;height:90pt;border-top :1pt solid #f9e4e4;">
                        <div style="height:88pt;width:70%;float:left;">
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">订单编号: </span><span>1234456781937</span>
                        </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">下单日前: </span><span>2020-01-12 12:22:11</span>
                            </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">流水单号: </span><span>7744229282823823</span>
                            </div>
                        </div>
                        <div style="height:88pt;width:28%;float:left;">
                        <van-button  style="margin-top:45pt;" color="#BCC5D3"  round size="large"  >被驳回</van-button>
                        </div>
                    </div>
            </van-row>
            <van-row style=" background-color:white;border-radius:4pt;padding:5pt 5pt 0pt 5pt;margin:5pt 5pt;">
                    <div style="height:20pt;width:100%;border-bottom :1pt solid #f9e4e4;">
                    <div style="width:95%;margin-top:5pt;margin-left:12pt;">
                        <span>浏阳市安倍景飒原材料有限公司</span>
                    </div>  
                </div>
                <div v-for="itemC in [1,2,3]" :key="itemC" style="height:60pt;background-color:white;">
                    <div>    
                        <div style="float:left;width:25%;height:60pt;">
                            <img style="border-radius:4pt;width:50pt; float:left;margin-left:14pt; height;46pt;margin-top:5pt;" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                        </div>
                        <div style="width:70%;height:60pt;float:left;font-size:12pt;">
                            <div style="width:100%;height:20pt;margin-top:3pt; color:#414141">
                                <span>军工粉</span> <span style="float:right">X 1</span>
                            </div>
                            <div style="width:100%;height:14pt;font-size:10pt;color:#999999;">
                                <span>150斤/包 </span><span>隔热包装</span>
                            </div>
                            <div style="width:100%;height:26pt;">
                                <div style="float:right;height:26pt;color:red;width:40%;padding-top:3pt;">
                                    <span style="float:right;">¥30元</span>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
                    <div style="background-color:white;width:100%;height:90pt;border-top :1pt solid #f9e4e4;">
                        <div style="height:88pt;width:70%;float:left;">
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">订单编号: </span><span>1234456781937</span>
                        </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">下单日前: </span><span>2020-01-12 12:22:11</span>
                            </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">流水单号: </span><span>7744229282823823</span>
                            </div>
                        </div>
                        <div style="height:88pt;width:28%;float:left;">
                        <van-button  style="margin-top:45pt;" color="#F9AC58"  round size="large"  >审核中</van-button>
                        </div>
                    </div>
            </van-row>
               <van-row style="margin-bottom:40pt;"></van-row>
        </van-tab>
        <van-tab title="发货状态">
            <van-row style=" background-color:white;border-radius:4pt;padding:5pt 5pt 0pt 5pt;margin:5pt 5pt;">
                    <div style="height:20pt;width:100%;border-bottom :1pt solid #f9e4e4;">
                    <div style="width:95%;margin-top:5pt;margin-left:12pt;">
                        <span>浏阳市安倍景飒原材料有限公司</span>
                    </div>  
                </div>
                <div v-for="itemC in [1,2,3]" :key="itemC" style="height:60pt;background-color:white;">
                    <div>    
                        <div style="float:left;width:25%;height:60pt;">
                            <img style="border-radius:4pt;width:50pt; float:left;margin-left:14pt; height;46pt;margin-top:5pt;" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                        </div>
                        <div style="width:70%;height:60pt;float:left;font-size:12pt;">
                            <div style="width:100%;height:20pt;margin-top:3pt; color:#414141">
                                <span>军工粉</span> <span style="float:right">X 1</span>
                            </div>
                            <div style="width:100%;height:14pt;font-size:10pt;color:#999999;">
                                <span>150斤/包 </span><span>隔热包装</span>
                            </div>
                            <div style="width:100%;height:26pt;">
                                <div style="float:right;height:26pt;color:red;width:40%;padding-top:3pt;">
                                    <span style="float:right;">¥30元</span>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
                    <div style="background-color:white;width:100%;height:90pt;border-top :1pt solid #f9e4e4;">
                        <div style="height:88pt;width:70%;float:left;">
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">订单编号: </span><span>1234456781937</span>
                        </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">下单日前: </span><span>2020-01-12 12:22:11</span>
                            </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">流水单号: </span><span>7744229282823823</span>
                            </div>
                        </div>
                        <div style="height:88pt;width:28%;float:left;">
                        <van-button  style="margin-top:45pt;" color="#F9AC58"  round size="large"  >待发货</van-button>
                        </div>
                    </div>
            </van-row>
            <van-row style=" background-color:white;border-radius:4pt;padding:5pt 5pt 0pt 5pt;margin:5pt 5pt;">
                    <div style="height:20pt;width:100%;border-bottom :1pt solid #f9e4e4;">
                    <div style="width:95%;margin-top:5pt;margin-left:12pt;">
                        <span>浏阳市安倍景飒原材料有限公司</span>
                    </div>  
                </div>
                <div v-for="itemC in [1,2,3]" :key="itemC" style="height:60pt;background-color:white;">
                    <div>    
                        <div style="float:left;width:25%;height:60pt;">
                            <img style="border-radius:4pt;width:50pt; float:left;margin-left:14pt; height;46pt;margin-top:5pt;" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                        </div>
                        <div style="width:70%;height:60pt;float:left;font-size:12pt;">
                            <div style="width:100%;height:20pt;margin-top:3pt; color:#414141">
                                <span>军工粉</span> <span style="float:right">X 1</span>
                            </div>
                            <div style="width:100%;height:14pt;font-size:10pt;color:#999999;">
                                <span>150斤/包 </span><span>隔热包装</span>
                            </div>
                            <div style="width:100%;height:26pt;">
                                <div style="float:right;height:26pt;color:red;width:40%;padding-top:3pt;">
                                    <span style="float:right;">¥30元</span>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
                    <div style="background-color:white;width:100%;height:90pt;border-top :1pt solid #f9e4e4;">
                        <div style="height:88pt;width:70%;float:left;">
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">订单编号: </span><span>1234456781937</span>
                        </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">下单日前: </span><span>2020-01-12 12:22:11</span>
                            </div>
                            <div style="height:30pt;width:100%;margin-top:4pt">
                                <span style="color:#999999;font-size:12pt">流水单号: </span><span>7744229282823823</span>
                            </div>
                        </div>
                        <div style="height:88pt;width:28%;float:left;">
                        <van-button  style="margin-top:45pt;" type="danger" round size="large"  >确认收货</van-button>
                        </div>
                    </div>
            </van-row>
               <van-row style="margin-bottom:40pt;"></van-row>
        </van-tab>
    </van-tabs>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant'
import { Col, Row } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Card } from 'vant'
import { Button } from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Tab)
Vue.use(Tabs)
export default {
    data(){
        return {
            active:0,
            Status:1
        }
    }
 
}
</script>