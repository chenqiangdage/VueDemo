<template>
    <div>
       <van-nav-bar  title="收货地址"  left-text="返回"   left-arrow  @click-left="onClickLeft"  />
        <van-address-list  
        v-model="chosenAddressId"  
        :list="list"      
        default-tag-text="默认" @select="onSelect" @add="onAdd"  @edit="onEdit"/> 
    </div>
</template>
<script>
import Vue from 'vue';    
import { Divider } from 'vant';
import { Button } from 'vant';
import { AddressList } from 'vant';
import { Panel } from 'vant';
import { Toast } from 'vant';
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Panel);
Vue.use(AddressList);
Vue.use(Button);
Vue.use(Divider);
export default {
    data(){
        return {
            HaveDatas:true ,
            chosenAddressId: '1',
            list: [
                {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ],
            disabledList: [
                {
                id: '3',
                name: '王五',
                tel: '1320000000',
                address: '浙江省杭州市滨江区江南大道 15 号'
                }
            ] 
        }
    },
    methods:{
        onSelect(item, index){
            Toast('选中地址:' + item.id +item.address);
            Toast("ajax 更新收货地址");
        },
        onClickLeft(){
            this.$router.back();
        },
        onClickRight(){

        },
        onAdd() {
          //  Toast('新增地址');
          this.$router.push({ path: '/AddressEdit' })
        },
        onEdit(item, index) {
        Toast('编辑地址:' + index);
        }
    }
}
</script>
<style >
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
</style>