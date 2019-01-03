<template>
  <div class="home">
    <van-nav-bar title="首页"/>
    <van-swipe :autoplay="3000" indicator-color="white" class="Swipe">
      <van-swipe-item v-for="(image,index) in images" :key="index">
        <img :src="image" class="imgcss">
      </van-swipe-item>
    </van-swipe>
    <div class="catagroy">
      <van-row>
        <van-col class="row" span="6" v-for="(img,index) in catagroy_img" :key="index">
          <a href="#">
            <img class="camtagroy_img" :src="img.src" alt>
          </a>
          <br>
          <span class="catagroy_text">{{img.name}}</span>
        </van-col>
      </van-row>
    </div>
    <div class="guss_like">
      <div>
        <span class="guss_symbol">-</span>
        <span>猜你喜欢</span>
        <span class="guss_symbol">-</span>
      </div>
      <div class="shop_card" v-for="(shop,index) in shoplist" :key="index">
        <div class="left_content">
          <img :src="shop.src" class="shop_img">
        </div>
        <div class="right_content">
          <span class="shop_title">{{shop.name}}</span>
          <br>
          <div class="star">
            <div class="show_star" :style="{width:shop.mark/5*100 +'%'}"></div>
            <span>{{shop.mark}}</span>
          </div>
          <span class="shop_sallenum">月销量:{{shop.sellnum}}份</span>
        </div>
        <div></div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
// @ is an alias to /src
import Bottom from "@/components/bottom_sty1.vue";

export default {
  name: "home",
  components: {
    Bottom
  },
  data() {
    return {
      images: [
        require("../assets/1.webp"),
        require("../assets/2.webp"),
        require("../assets/3.webp"),
        require("../assets/4.webp")
      ],
      catagroy_img: [
        { src: require("../assets/catagroy/catagroy1.webp"), name: "美食" },
        { src: require("../assets/catagroy/catagroy2.webp"), name: "健康" },
        { src: require("../assets/catagroy/catagroy3.webp"), name: "跑腿代购" },
        { src: require("../assets/catagroy/catagroy4.webp"), name: "红包签到" },
        { src: require("../assets/catagroy/catagroy5.webp"), name: "水果" },
        { src: require("../assets/catagroy/catagroy6.webp"), name: "商超便利" },
        { src: require("../assets/catagroy/catagroy7.webp"), name: "厨房生鲜" },
        { src: require("../assets/catagroy/catagroy8.webp"), name: "鲜花绿植" }
      ],
      shoplist: [
        {
          src: require("../assets/gust_shop/1.webp"),
          name: "陈记状拌面",
          mark: 4.8,
          sellnum: "856"
        },
        {
          src: require("../assets/gust_shop/2.webp"),
          name: "大米先生",
          mark: 4.8,
          sellnum: "481"
        },
        {
          src: require("../assets/gust_shop/3.webp"),
          name: "蒸味小厨",
          mark: 4.8,
          sellnum: "462"
        },
        {
          src: require("../assets/gust_shop/4.webp"),
          name: "邵叔叔南洋鸡饭",
          mark: 4.5,
          sellnum: "474"
        },
        {
          src: require("../assets/gust_shop/5.webp"),
          name: "初作铁板炒饭",
          mark: 4.4,
          sellnum: "4564"
        },
        {
          src: require("../assets/gust_shop/6.webp"),
          name: "巨饿便当",
          mark: 4.3,
          sellnum: "4781"
        },
        {
          src: require("../assets/gust_shop/7.webp"),
          name: "乡村基",
          mark: 4.7,
          sellnum: "441"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.Swipe {
  height: 100px;
  width: 100%;
  overflow: hidden;
  background-color: #11CFFF;

  .imgcss {
    width: 100%;
    height: 100%;
  }
}

.catagroy {
  .row {
    height: 70px;

    .camtagroy_img {
      height: 50px;
      width: 50px;
    }

    .catagroy_text {
      display: block;
      margin-top: -3px;
      font-size: 14px;
      line-height: 14px;
    }
  }
}

.guss_like {
  .guss_symbol {
    color: #808080;
  }

  .shop_card {
    width: 100%;
    height: 100px;
    clear: both;

    .left_content {
      width: 20%;
      height: 100%;
      float: left;

      .shop_img {
        margin 0px 10px
        width: 75%;
        height: 60px;
      }
    }

    .right_content {
      float: left;
      width: 75%;
      text-align: left;
      margin-left: 10px;
      .shop_title {
        font-weight: 800;
      }
      .shop_sallenum
      {
        display inline-block
        margin-left: 130px
        font-size 13px
      }
      .star {
        background: url('../assets/bg.png');
        background-size:contain
        display: inline-block;
        width 85px 
        height 10px
        .show_star {
          background: url('../assets/bg2.png');
          background-size:contain
          height: 100%;
        }
      }
    }
  }
}
</style>
