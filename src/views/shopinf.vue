<template>
  <div class="shop_inf">
    <v-header/>
    <div class="tap">
      <van-tabs v-model="index" line-height="0" @click="change(index)">
        <van-tab title="商品">
          <goods></goods>
        </van-tab>
        <van-tab title="评论">
          <ratings></ratings>
        </van-tab>
        <van-tab title="商家">
          <seller></seller>
        </van-tab>
      </van-tabs>
    </div>
    <bottom/>
  </div>
</template>
<script>
/* eslint-disable */
import index from "@/components/header";
import goods from "@/components/goods";
import ratings from "@/components/ratings";
import seller from "@/components/seller";
import Bottom from "@/components/bottom.vue";
export default {
  components: {
    "v-header": index,
    goods,
    ratings,
    seller,
    bottom: Bottom,
  },
  methods:{
    change(index){
      var tabList=document.querySelectorAll('.van-ellipsis');
      for(var i=0;i<tabList.length;i++)
      {
        if(i!=index)
          tabList[i].style.color="black";
        else
          tabList[i].style.color = 'red';
      }
    },
    init() {
      window.onload= () => {
        document.querySelectorAll('.van-ellipsis')[0].style.color = 'red';
      }
    }
  },
  mounted(){
    this.init();
  },
  data () {
    return {
      idnex:0
    }
  }
};
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
@import '../common/css/minxin';

.shop_inf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .tap {
    width: 100%;
    height: 40px;
    border-1px(rgba(7, 17, 27, 0.1));
  }
}
</style>


