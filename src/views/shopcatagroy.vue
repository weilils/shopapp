<template>
  <div>
    <div class="top">
      <div class="title">
        <i class="iconfont icon-left"></i>
        <span class="title_context">美食</span>
      </div>
      <van-search
        v-model="value"
        placeholder="请输入店铺名称"
        background="orangered"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <ul class="overflow-tab">
        <li v-for="(catagroy,index) in catagroyList" :key="index" class="tab">{{catagroy}}</li>
      </ul>
    </div>
    <div class="content">
      <van-row>
        <van-col span="8">
          <select id="area" class="area">
            <option data-id="0">全部区域</option>
            <option v-for="(area,index) in areaList" :key="index" :data-id="area.id">{{area.name}}</option>
          </select>
        </van-col>
        <van-col span="8">
          <span class="sort">按照评分</span>
        </van-col>
        <van-col span="8">
          <span class="sort">销量排序</span>
        </van-col>
      </van-row>
      <div class="shop_list">
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
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import Bottom from "@/components/bottom_sty1.vue";

export default {
  components: {
    Bottom
  },
  data() {
    return {
      value: "",
      catagroyList: [
        "美食",
        "超市便利",
        "蔬菜水果",
        "甜点饮品",
        "早餐",
        "包子粥铺",
        "炸鸡零食",
        "浪漫鲜花",
        "甜蜜蛋糕"
      ],
      areaList: [
        { name: "四河小区", id: 1 },
        { name: "天府三街", id: 2 },
        { name: "锦城广场", id: 3 },
        { name: "华府大道", id: 4 }
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
  },
  methods: {
    onSearch: function() {
      console.log("开始搜索");
    }
  }
};
</script>
<style lang="stylus"  scoped>
@import url('http://at.alicdn.com/t/font_991092_fwa3vsu5ty.css');

.sort {
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  font-weight: 600;
}

.area {
  border: none;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #666;
  background:#fff;
  outline: none;
}

.top {
  background: orangered;
}

.title {
  color: #ffffff;
  text-align: left;
}

.icon-left {
  font-size: 25px;
  margin-left: 3%;
}

.title_context {
  font-size: 20px;
  font-weight: 800;
  margin-left: 30%;
}

.overflow-tab {
  overflow-x: auto;
  overflow-y: hidden;
  color: #fff;
  height: 25px;
  white-space: nowrap;
}

.overflow-tab::-webkit-scrollbar {
  display: none;
}

.overflow-tab .tab {
  margin-left: 14px;
  display: inline-block;
  line-height: 16px;
  text-align: center;
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
      margin: 0px 10px;
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

    .shop_sallenum {
      display: inline-block;
      margin-left: 130px;
      font-size: 13px;
    }

    .star {
      background: url('../assets/bg.png');
      background-size: contain;
      display: inline-block;
      width: 85px;
      height: 10px;

      .show_star {
        background: url('../assets/bg2.png');
        background-size: contain;
        height: 100%;
      }
    }
  }
}
</style>


