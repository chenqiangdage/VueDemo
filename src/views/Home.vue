<template>
    <div>
        <van-row > 
            <van-col span="24"> 
            <van-search  class="shuinibackgroundInput"   v-model="value"  shape="round"    placeholder="请输入原材料内容"/>
            </van-col>
        </van-row>
        <van-row class="defaultPadding "> 
             <van-col span="24"> 
                <div class="my-swipe"> 
                    <van-swipe :autoplay="5000" style="height: 99pt;" indicator-color="white">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img v-lazy="image"  />
                        </van-swipe-item>
                    </van-swipe> 
                </div>
            </van-col>
        </van-row>
        <van-row class=" ">
            <van-col span="24">
               <van-grid :border="false" :column-num="4">
                   <van-grid-item class="  mygriditem">
                        <van-image  style="border-radius: 8%;" round width="4rem" height="4rem" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg" />
                        <label>黑火药</label>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image  style="border-radius: 8%;" round width="4rem" height="4rem" src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg" />
                        <label>引火线</label>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image  style="border-radius: 8%;" round width="4rem" height="4rem" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4062723781,2919917595&fm=26&gp=0.jpg" />
                        <label>危化品</label>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image  style="border-radius: 8%;" round width="4rem" height="4rem" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1429763451,839640633&fm=26&gp=0.jpg" />
                        <label>普通类</label>
                    </van-grid-item>
                </van-grid>
            </van-col>
        </van-row>
      
        <van-row>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list  v-model="loading"  :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <van-row v-for="item in list" :key="item" style="margin-top:5pt;background-color:white;margin:10pt">
                        <van-card class="mycard" @click="CompanyDetail()">
                             <div slot="thumb" style="width:62pt;">
                                <van-image  width="61pt"  height="61pt"  fit="contain"  src="http://img3.imgtn.bdimg.com/it/u=591073428,3751554049&fm=11&gp=0.jpg"/>
                            </div>
                             <div slot="title">
                                <label style="color:grey;font-size:14pt;">湖南省尚艺原材料公司</label>  
                            </div>
                            <div slot="desc" style="margin-top:4pt;">
                                <label style="color:grey;font-size:12pt;">地址:浏阳市沿街镇888号</label>    
                            </div>
                            <div slot="price">
                                <label style="color:grey;font-size:12pt;font-weight:normal;">联系电话：18211436586</label>  
                            </div>
                            <div slot="num" style="margin-right:4pt;">
                                <van-icon name="browsing-history-o" style="color:red" /> <label style="color:grey;font-size:12pt;">456</label> 
                            </div>
                        </van-card>
                    </van-row>
                </van-list>
            </van-pull-refresh>
        </van-row>
    </div>
</template>
<script>
import Vue from 'vue';
import { Button } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Col, Row } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image } from 'vant';
import { NoticeBar } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { PullRefresh } from 'vant';
import { Card } from 'vant';
import { Divider } from 'vant';
import { Tag } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(Card);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
Vue.use(NoticeBar);
Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Col);
Vue.use(Row);

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Button);
export default {
    data(){
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            value:"",
            images: [
                'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1429763451,839640633&fm=26&gp=0.jpg',
                'http://www.hinews.cn/pic/0/10/93/59/10935917_013868.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2081625624,2167917789&fm=26&gp=0.jpg',
                'https://baike.sogou.com/p/20090724/bki-20090724224854-1551044521.jpg'
                
            ]
        }
    },
     created() {
         this.$emit('showfooter', true);
           // this.$emit('ShowGoodsAction', false);
          
        },
    beforeRouteEnter(to, form, next) {         
        next()
    },
    methods:{
        CompanyDetail(){
            this.$router.push("/CompanyDetail");
        },
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
        }
    }
}
</script>
<style>
.mygriditem img{
    border-radius: 8px;
}
.shuinibackgroundInput{
    background-color: #F7F7F7;
}
.shuinibackgroundInput input {
    border-radius:4pt;
}
.mycard{
    background-color: white;
    padding: 10pt 2pt 10pt 10pt;
}
.van-search__content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-left: 8px;
    background-color: #EAEAEA;
    border-radius: 1;
}
.van-grid-item__content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    padding: 16px 8px;
    background-color: white;
}
.van-card__thumb {
    position: relative;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    width: 62pt;
    height: 62pt;
    margin-right: 2pt;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.my-swipe img{ 
    width: 100%;
    height: 100%;
}
.defaultPadding{
    padding-left: 12px;
    padding-right: 12px;
}
.van-grid-item__content::after {
    z-index: 1;
    border-width: 0 0px 1px 0;
}
.van-card__tag {
    position: absolute;
    top: 100px;
    left: 25px;
}
</style>