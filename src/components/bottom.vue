<template>
<div>
   <van-goods-action>
  <van-goods-action-mini-btn
    icon="wap-home"
    text="首页"
    @click="onClickMiniBtn"
  />
  <van-goods-action-mini-btn
    icon="cart-o"
    text="购物车"
    @click="onClickShopBus"
  />
  <van-goods-action-mini-btn
    icon="user-circle-o"
    text="我的"
    @click="onClickMine"
  />
  <van-goods-action-big-btn
    text="加入购物车"
    @click="onClickBigBtn"
  />
  <van-goods-action-big-btn
    primary
    text="立即购买"
    @click="onClickBigBtn"
  />
</van-goods-action>
</div>
</template>
<script>
import { Toast } from 'vant'
export default {
  methods: {
    onClickMiniBtn() {
      this.$router.push('/');
    },
    onClickBigBtn() {
      Toast('点击按钮');
    },
    onClickShopBus(){
     this.$router.push('/shoppingcar');
    },
    onClickMine()
    {
      //未登录
      //this.$router.push('/login');
      //以登陆
      this.$router.push('/mine');
    }
  }
} 
</script>

