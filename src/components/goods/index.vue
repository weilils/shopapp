<template>
  <div>
    <div class="content">
      <div class="left-menu">
        <div class="menu-item" v-for="good in goods" :key="good.name">
          <span class="item-text">{{ good.name }}</span>
        </div>
      </div>
      <div class="right-content">
        <div v-for="good in goods" :key="good.name">
          <div class="content-title">
            <div class="print-content"></div>
            <div class="content-title-text">{{ good.name }}</div>
          </div>
          <div class="product" v-for="food in good.foods" :key="food.name">
            <a class="productimg" v-bind:style="{ backgroundImage:'url('+food.icon+')'}"></a>
            <div class="product-inf">
              <span class="food-name">{{food.name}}</span>
              <br>

              <span class="food-desc" v-if="food.description">{{food.description}}</span>
              <br v-if="food.description">
              <span class="sell-num">月售{{food.sellCount}}份</span>
              <span class="sell-ratings">好评率{{food.rating}}%</span>
              <br>
              <span class="food-price">￥{{food.price}}</span>
              <span class="food-old-price" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
            <div class="opreation-img"><i class="icon-remove_circle_outline"></i><span class="buy-num">1</span><i class="icon-add_circle"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/common/css/index.styl';
const MSSG_OK = 0; //正常返回的标识
export default {
  data() {
    return { goods: {} };
  },
  mounted() {
    this.axios.get("http://172.16.10.42:8080/api/goods").then(response => {
      response = response.data;
      console.log(response);
      if (response.errno == MSSG_OK) {
        this.goods = response.data;
      }
    });
  }
};
</script>
<style lang="stylus">
@import '~@/common/css/minxin.styl';
.content {
  overflow-y: auto;
  .right-content {
    height: 486px;
    background: #fff;
    float: right;
    width: 80%;
    overflow-y: auto;

    .content-title {
      height: 30px;
      font-size: 14px;
      line-height 14px
      text-indent: 20px;
      background: #f3f5f7;
      position: relative;
      clear: both;
    }

    .product {
      height: 94px;
      overflow: hidden;
      width 100%;
      border-1px-bottom(rgba(7, 17, 27, 0.1));
    }
    .product:last-child{
       border-1px-bottom(rgba(7, 17, 27, 0));
      }
    

    .productimg {
      display: block;
      float: left;
      margin: 18px 10px 36px 18px;
      height: 45px;
      width: 45px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
    }

    .product-inf {
      display: block;
      float: left;
      height: 60x;
      margin: 16px 0px 18px 0px;
      width: 60%;

      .food-name {
        font-size: 14px;
        display: block;
        float: left;
        color: rgb(7, 17, 27);
      }

      .food-desc {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 10px;
        display: block;
        width: 100%;
        text-align: left;
        float: left;
        color: rgb(147, 153, 149);
      }

      .food-price {
        color: rgb(240, 20, 20);
        font-size: 10px;
        font-weight: 700;
        line-height: 15px;
        float: left;
      }

      .food-old-price {
        text-decoration: line-through;
        color: rgb(147, 153, 159);
        font-size: 10px;
        line-height: 15px;
        float: left;
        font-weight: normal;
        margin-left: 10px;
      }

      .sell-num {
        font-size: 10px;
        line-height: 14px;
        float: left;
      }

      .sell-ratings {
        font-size: 10px;
        line-height: 14px;
        float: left;
        margin-left: 10px;
      }
    }

    .opreation-img {
      float: left;
      display: block;
      margin-top: 46px;
      width: 51px;
      height: 20px;
      font-size 20px
      padding-top 5px
      .buy-num{
        font-size 12px
        display inline-block
        vertical-align bottom
        margin 6px 2px
      }
      .icon-add_circle
      {
       
        vertical-align top
        color: #20b3ff
      }
    }

    .print-content {
      float: left;
      background: #d9dde1;
      display: block;
      width: 6px;
      height: 30px;
      left: 0px;
      top: 0px;
    }

    .content-title-text {
      margin: 8px;
      float: left;
      display: block;
    }
  }

  .left-menu {
    width: 20%;
    height: 486px;
    overflow-x:hidden;
    overflow-y:auto;
    float: left;
    background: #f3f5f7;
    font-size: 12px;
    &::-webkit-scrollbar
    {
      display none
    }
    .menu-item {
      color: rgb(240, 20, 20);
      height: 64px;
      color: rgb(75, 85, 93);
      border-1px-bottom(rgba(7, 17, 27, 0.1));
      // .menu-item-text
      text-align: center;

      &:hover {
        color: #fff;
        font-weight: 650;
        background: #fff;
      }

      .item-text {
        display: inline-block;
        text-decoration: none;
        margin: 20px 12px;
        line-height: 14px;
        font-size: 14px;
        text-align: center;
        color: rgb(77, 85, 93);
      }
    }
  }
}

.bottom {
  width: 100%;
  height: 90px;
  background: #000;
}
</style>


