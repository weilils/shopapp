<template>
  <div>
    <div>
      <van-swipe :autoplay="3000" class="productimg">
        <van-swipe-item v-for="(image, index) in imagelist" :key="index">
          <img :src="image" class="imgcss">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="product_title">斯纳菲童鞋 女童靴子 冬季加绒 真皮短靴 中大童保暖牛皮女孩 儿童雪地靴 韩版 儿童马丁靴 红色(毛绒内里) 30码/内长19cm</div>
    <div class="product_label">
      <span class="type_of_shipping">配送:免运费</span>
      <span class="sellnum">月销240</span>
      <span class="position">天府广场</span>
    </div>
    <div class="price">
      <span class="current_price">￥{{price}}</span>
      <span v-if="oldPrice" class="oldPrice">{{oldPrice}}</span>
    </div>
    <div class="detail_gap"></div>
    <div class="chose_specifications">
      <span class="title">规格</span>
      <span class="content">未选择</span>
      <van-icon name="arrow" size="15px" class="img_icon" @click="chose_specifications()"/>
    </div>
    <div class="detail_gap"></div>
    <div class="ratings">
      <div class="ratings_title van-hairline--bottom">
        <span class="tilte_left">评价</span>
        <span class="title_right">共{{ratings.totalNum}}条</span>
      </div>
      <div class="ratings_content">
        <div>
          <span class="username">玉***0</span>
          <span class="ratings_date">2018-11-16</span>
          <br>
          <span class="ratings_data">超级美的鞋子，宝宝喜欢极了，很不错，穿着舒适。</span>
          <br>
          <div class="size">颜色:红色 尺码:31</div>
        </div>
        <div class="bottom_fill"></div>
      </div>
    </div>
    <van-sku
      v-model="showBase.value"
      :sku="sku"
      :goods="goods"
      :goods-id="goods.id"
      :hide-stock="sku.hide_stock"
      :quota="quota"
      :quota-used="quotaUsed"
      :close-on-click-overlay="closeOnClickOverlay"
      :disable-stepper-input="disableStepperInput"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <bottom/>
  </div>
</template>
<script>
import bottom from "@/components/bottom.vue";
export default {
  components: {
    bottom
  },
  methods: {
    chose_specifications() {
      this.$set(this.showBase, "value", true);
    },
    onBuyClicked() {
      alert("onBuyClicked clicked");
    },
    onAddCartClicked() {
      alert("onAddCartClicked click");
    }
  },
  data() {
    return {
      ratings: {
        totalNum: 5
      },
      quota: 10,
      quotaUsed: 0,
      closeOnClickOverlay: false,
      disableStepperInput: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl:
                  "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/19627/38/3694/220372/5c2a4090E61182f28/a0b25d79d58a4bd8.jpg!q70.dpg.webp" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "粉色",
                imgUrl:
                  "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/29810/36/3660/236700/5c2a408fE194bbbb8/7a5fe61f1c8cfbfb.jpg!q70.dpg.webp"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "尺码", // skuKeyName：规格类目名称
            v: [
              {
                id: "1200", // skuValueId：规格值 id
                name: "30码" // skuValueName：规格值名
              },
              {
                id: "1201",
                name: "31码"
              },
              {
                id: "1202",
                name: "32码"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1200", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2260, // skuId，下单时后端需要
            price: 121, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1201", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2261, // skuId，下单时后端需要
            price: 130, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1202", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2250, // skuId，下单时后端需要
            price: 162, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1200", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 130 // 当前 sku 组合对应的库存
          },
          {
            id: 2250, // skuId，下单时后端需要
            price: 135, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1201", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 80 // 当前 sku 组合对应的库存
          },
          {
            id: 2250, // skuId，下单时后端需要
            price: 200, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1202", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 50 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1" // 是否必填 '1' 表示必填
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        id: 21,
        title: "斯纳菲童鞋",
        // 默认商品 sku 缩略图
        picture:
          "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/29810/36/3660/236700/5c2a408fE194bbbb8/7a5fe61f1c8cfbfb.jpg!q70.dpg.webp"
      },
      customStepperConfig: {
        // 自定义限购文案
        quotaText: "每次限购xxx件",
        // 自定义步进器超过限制时的回调
        handleOverLimit: data => {
          const { action, limitType, quota, quotaUsed } = data;

          if (action === "minus") {
            Toast("至少选择一件商品");
          } else if (action === "plus") {
            // const { LIMIT_TYPE } = Sku.skuConstants;
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              let msg = `单次限购${quota}件`;
              if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
              Toast(msg);
            } else {
              Toast("库存不够了");
            }
          }
        }
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placehold配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        }
      },
      skuData: {
        // 商品 id
        goodsId: "946755",
        // 留言信息
        messages: {
          message_0: "12",
          message_1: ""
        },
        // 另一种格式的留言，key 不同
        cartMessages: {
          留言1: "xxxx"
        },
        // 选择的商品数量
        selectedNum: 1,
        // 选择的 sku 组合
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: "30349",
          s2: "1193",
          s3: "0",
          stock_num: 111
        }
      },
      showBase: { value: false },
      imagelist: [
        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/19627/38/3694/220372/5c2a4090E61182f28/a0b25d79d58a4bd8.jpg!q80.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/32/9/10523/283228/5bac9789Ef77fe4dc/2c1a038980af74d6.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/4480/18/9468/403432/5bac9774Ef427c683/4d4e1d33accff2d8.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/5989/30/9531/398272/5bac9776E7cbee80b/ea3b14ae1172064e.jpg!q70.dpg.webp"
      ],
      price: 129,
      oldPrice: 288
    };
  }
};
</script>
<style lang="stylus" scoped>
.ratings_title {
  width: 100%;
  height: 32px;
  font-size: 18px;
  margin: 3px auto;
  overflow: hidden;

  .tilte_left {
    float: left;
    width: 50%;
    text-align: left;
    text-indent: 5px;
  }

  .title_right {
    width: 47%;
    float: left;
    text-align: right;
  }
}

.ratings_content {
  overflow: hidden;

  .username {
    float: left;
    width: 50%;
    color: #999;
    text-align: left;
    text-indent: 6px;
    font-size: 12px;
  }

  .ratings_date {
    float: left;
    width: 47%;
    color: #999;
    text-align: right;
    font-size: 12px;
  }

  .ratings_data {
    font-size:14px
  }
  .size
  {
    font-size 12px
    color #999
    text-align left 
    width 100%
    height 24px
    margin 3px auto
    text-indent 6px
  }
}

.productimg {
  width: 100%;
  height: 30%;

  .imgcss {
    width: 100%;
    height: 100%;
  }
}
.bottom_fill
{
  width 100%
  height 50px
}
.product_title {
  text-align: left;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin: 5px 5px;
}

.product_label {
  color: #A2A2A2;
  overflow: hidden;

  .type_of_shipping {
    float: left;
    width: 33%;
    height: 20px;
    font-size: 13px;
    text-align: left;
    display: block;
    text-indent: 5px;
  }

  .sellnum {
    float: left;
    width: 33%;
    font-size: 13px;
    display: block;
    height: 20px;
  }

  .position {
    float: left;
    width: 30%;
    font-size: 13px;
    display: block;
    height: 20px;
    text-align: right;
    padding-right: 5px;
  }
}

.price {
  padding-top: 20px;
  text-align: left;
  text-indent: 5px;

  .current_price {
    color: #e4393c;
    font-weight: 700;
    font-size: 20px;
  }

  .oldPrice {
    text-decoration: line-through;
    font-size: 16px;
    margin-left: 5px;
  }
}

.detail_gap {
  padding-top: 10px;
  background: #e8e8ed;
  margin: -1px 0;
}

.chose_specifications {
  overflow: hidden;
  height: 40px;
  line-height: 40px;

  .title {
    float: left;
    width: 33%;
    display: block;
    text-align: left;
    text-indent: 5px;
  }

  .img_icon {
    float: left;
    width: 33%;
    display: block;
    text-align: right;
    margin-top: 3%;
  }

  .content {
    display: block;
    width: 33%;
    float: left;
  }
}
</style>


