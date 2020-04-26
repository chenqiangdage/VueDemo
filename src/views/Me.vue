<template>
    <div>
       <div class="Cheadme">  
               <van-card class="CVcardme" style="padding-right:0pt;">
                    <div slot="thumb" >
                        <van-image round="" width="56pt"  height="56pt"  fit="contain"  src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                    </div>
                    <div slot="desc" style="margin-top:10pt;padding-right:0pt;">
                        <van-row>
                            <van-col span="18">
                                <label style="color:#F7F7F7;font-size:11pt;">原材料企业</label>  
                            </van-col>
                        </van-row>
                         <van-row style="padding-right:0pt;margin-right:0pt;">
                                <van-col span="18">
                                    <label style="color:#F7F7F7;font-size:11pt;">湖南省浏阳市旗开得胜烟花厂</label>    
                                </van-col>
                              <van-col spnn="6" style="float:right; background-color:#f77c7cb5; border-radius:8pt 0pt 0pt 8pt ; height:16pt">     
                                  <span style="color:white;margin-left: 4pt;"> <router-link to="/CompanyAuth" style="color:white"> 去认证  ></router-link> </span>
                              </van-col>  
                        </van-row>
                    </div>
                </van-card>
           <van-row style="width:100%">
                <div  class="Mywallet">
                    <div style="width:100%;height:20pt">
                        <label style="float:left;margin-left:10pt;color:white;margin-top:7pt;font-size:10pt">我的钱包</label>
                        <label style="float:right;margin-right:10pt;color:white;margin-top:7pt;font-size:10pt">明细 ></label>
                    </div>
                    <div style="width:100%;height:35pt;">
                        <div style="display:block;margin:0 auto;width:150pt;color:white;font-size:20pt;padding-top:10pt;">
                             <label style="display:block;margin:0 auto;text-align:center;width:100pt;">8888.88</label>
                        </div>   
                    </div>
                      <div style="width:100%;height:20pt;">
                        <div style="display:block;margin:0 auto;width:150pt;color:white;font-size:10pt;padding-top:1pt;">
                             <label style="display:block;margin:0 auto;text-align:center;width:100pt;">余额（元）</label>
                        </div>   
                    </div>
                </div>
           </van-row>
       </div>
        <van-row class="myownrow" style="background-color:white;">
            <van-grid :border="false" :column-num="3" style="background-color:white;">
                <van-grid-item icon="description" text="全部订单"  to="/OrderList?Status=1" info="99+" />
                <van-grid-item icon="records" text="审核单" to="/OrderList?Status=2" info="99+" /> 
                <van-grid-item icon="logistics" text="配送单" to="/OrderList?Status=3" info="99+" />
            </van-grid>
        </van-row>
         <van-row class="myownrow2">
        <van-cell title="我的消息"  icon="volume-o"  size="large"  style="height:40pt;" />
        </van-row>
        <van-row class="myownrow2">
            <van-cell title="浏览记录"  icon="todo-list-o"  size="large"  style="height:40pt;" />
        </van-row>
        <van-row class="myownrow2">
            <van-cell title="客服咨询"   icon="service-o"  size="large"  style="height:40pt;" />
        </van-row>
        <van-row class="myownrow2">
            <van-cell title="设置"   icon="setting-o"  size="large"  style="height:40pt;" />
       </van-row>    
    </div>
</template>
<script>
import Vue from 'vue'
import { Col, Row } from 'vant'
import { Card } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Icon } from 'vant'
import { Tag } from 'vant'
import { Grid, GridItem } from 'vant'
import { Button } from 'vant'

Vue.use(Button)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)

export default {
     created() {
        this.$emit('showfooter', true);
        // this.$emit('ShowGoodsAction', false);
    }
}
</script>
<style>
.Mywallet{
    position: relative; 
    margin: auto;
    width:80%;
    background-color:#ffffff80;
    height:80pt;
    border-radius:10px;
}
.van-card__thumb {
    position: relative;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    width: 58pt; 
    height: 58pt; 
    margin-right: 4px;
}
.myownrow{
    margin-top:1pt;
    margin-left:20pt;
    margin-right:20pt;
    background-color: white;   
}
.myownrow2{
    margin-top:1pt;
    margin-left:1pt;
    margin-right:1t;
    background-color: white;   
}
.Cheadme{
    background: url('../assets/myBg.png') no-repeat;
    height:160pt;
    background-size:cover;
}
.CVcardme
{
    background-color: #ffffff00;
}
 
</style>