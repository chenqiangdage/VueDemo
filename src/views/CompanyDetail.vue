<template>
    <div style="background-color:#F7F7F7;">
        <van-nav-bar  title="企业首页"  left-text="返回"  right-text=""  left-arrow  @click-left="onClickLeft"  />
        <div class="CheadCom">
           <van-row style="width:100%">
                <div  class="MyCompany">
                    <van-card class="mycardCom">
                        <div slot="thumb" style="width:62pt;">
                            <van-image  style="margin-right:1pt;" width="61pt"  height="61pt"  fit="contain"  src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                        </div>
                        <div slot="title">
                            <label style="color:grey;font-size:11pt;">湖南省尚艺原材料公司</label>  
                        </div>
                        <div slot="desc" style="margin-top:8pt;">
                            <label style="color:grey;font-size:11pt;">地址:浏阳市沿街镇888号</label>    
                        </div>
                        <div slot="price">
                            <label style="color:grey;font-size:11pt;font-weight:normal;">联系电话：18211436586</label>  
                        </div>
                        <div slot="num" style="margin-right:4pt;">
                            <van-icon name="browsing-history-o" style="color:red" /> <label style="color:grey;font-size:10pt;">456</label> 
                        </div>       
                    </van-card>
                </div>
           </van-row>
       </div>
       <div style="position:relative; top:42pt;height:20pt;">
            <van-tabs v-model="TypeActive">
            <van-tab title="黑火药">
                 <div style="position:relative; top:1pt;height:300pt;"> 
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list  v-model="loading"  :finished="finished" finished-text="没有更多了" @load="onLoad">
                            <van-card v-for="item in list" :key="item"  class="mycardPd"   title="01号黑火药" 
                            thumb="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1429763451,839640633&fm=26&gp=0.jpg">
                                <div slot="num">
                                    <van-stepper v-model="Numvalue" integer   />             
                                </div>
                                <div slot="title" style="margin-left:2pt;">
                                    <span style="color:black;font-size:14pt">军工粉</span>   
                                </div>
                                <div slot="price" style="margin-left:2pt;"> 
                                    <span style="color:red;font-size:12pt">¥700</span>        
                                </div>
                                <div slot="desc" style="margin-left:2pt;">
                                    <van-tag round   style="font-size:8pt;padding:0 0">15kg/包</van-tag>
                                    <van-tag round   style="font-size:8pt">粒状</van-tag>
                                    <span>简单介绍的文字</span> 
                                </div>
                            </van-card>
                        </van-list>
                    </van-pull-refresh>
                </div>
            </van-tab>
            <van-tab title="引火线">
               <div>
                    <div v-if="!HaveDatas" class="emptyNothing" style="">
                        <img style="width:100px;heigth:100px" src="../assets/empty.png" alt="">
                            <van-divider :style="{ color: 'black', borderColor: '#dbe2e8', padding: '0 16px' }">暂无商品！</van-divider>   
                    </div>
               </div>
            </van-tab>
            <van-tab title="危化品"></van-tab>
            <van-tab title="普通类"></van-tab>
            </van-tabs>
       </div>
    <van-goods-action v-if="true">
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    </div>
</template>
<script>
import Vue from 'vue'
import { Col, Row } from 'vant'
import { Card } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Icon } from 'vant'
import { Tag } from 'vant'
import { Grid, GridItem } from 'vant';
import { Button } from 'vant';
import { TreeSelect } from 'vant';
import { Stepper } from 'vant';
import { Tab, Tabs } from 'vant';
import { List } from 'vant';
import { PullRefresh } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Stepper);
Vue.use(TreeSelect);
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)

export default {
    data() {
        return {
            HaveDatas:false,
            refreshing:false,
            loading: false,
            finished: false,
            TypeActive:0,
            list:[1,2,3,3,4,],
            activeIndex:0,
            Numvalue:0,
            items:[],
            activeId: 1,
            activeIndex: 0
        };
    },
    created() {     
        this.$emit('showfooter', false);     
    },
    methods:{
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        },
        onRefresh() {
        // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        }, 
        onClickLeft()
        {
            this.$router.push("/Home");   
        }
    }
}
</script>
<style scope>

.MyCompany{
    position: relative; 
    margin: auto;
    width:90%;
    background-color:#ffffff00;
    height:60pt;
    top:40pt;  
}
.CheadCom{
    background: url('../assets/CompanyBg.png') no-repeat;
    height:80pt;
    background-size: 100% 100%;
}
.mycardCom {
    background-color: #ffffff;
    padding: 10pt 2pt 1pt 1pt;
    border-radius:10pt;
}
.mycardPd{
    background-color: #ffffff;
    margin:0pt 5pt 0pt 5pt;
    margin-top:0pt;
    border-bottom: 1pt solid #cec0c0;
}
 .emptyNothing {
    min-height: 300pt;
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: #f7f4f8;
}
.emptyNothing img {
    padding-top: 1rem;
    width: 50%;
    height: 6rem;
    margin: 0 auto;
}
</style>