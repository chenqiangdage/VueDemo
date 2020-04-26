<template>
    <div>
        <van-nav-bar  title="新增地址"  left-text="返回"   left-arrow  @click-left="onClickLeft"  />
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"/>
    </div>
</template>
<script>
import { Toast } from 'vant';
import Vue from 'vue';
import { AddressEdit } from 'vant';
import { Area } from 'vant';

Vue.use(Area);
Vue.use(AddressEdit);
export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
      onClickLeft(){
           this.$router.back();
      },
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>