<template>
  <div>
    <div class="title">
      <i class="iconfont icon-left" v-on:click="returnPrePage()"/>
      <span class="title-top">我的订单</span>
      <br>
      <span class="label" @click="change($event)" data-id="1">全部</span>
      <span class="label" @click="change($event)" data-id="2">已付款</span>
      <span class="label" @click="change($event)" data-id="3">待评价</span>
    </div>
    <div class="content" v-for="(goods,index) in imageList" :key="index">
      <van-card
        :num="goods.num"
        tag="热销"
        :price="goods.price"
        :title="goods.title"
        :thumb="goods.imageUrl"
        :origin-price="goods.origin_price"
      >
        <div slot="tags">
          <br>
          <span class="goods-size" v-for="(size,index) in goods.size">{{size}}</span>
        </div>
        <div slot="footer">
          <van-button round v-if="showType==2" size="mini">确认收货</van-button>
          <van-button round v-if="showType==3" size="mini">评价</van-button>
        </div>
        <div slot="desc" class="van-ellipsis" style="position: absolute;width:100%;">{{goods.desc}}</div>
      </van-card>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    change(event) {
      var tabid = event.currentTarget.getAttribute("data-id");
      switch (Number(tabid)) {
        case 1:
          this.showType = 1;
          console.log("全部");
          break;

        case 2:
          this.showType = 2;
          console.log("已付款");
          break;

        case 3:
          this.showType = 3;
          console.log("待评价");
          break;
        default:
          console.log(Number(tabid));
      }
    },
    returnPrePage() {
      console.log("返回上一页");
    }
  },
  data() {
    return {
      showType: 1,
      imageList: [
        {
          id: 1,
          imageUrl:
            "https://m.360buyimg.com/mobilecms/jfs/t29347/193/1027658446/305248/c9bfc7f/5c04fdeaN744a9b56.png.webp",
          title: "NIKE AJ乔1 篮球鞋",
          price: 3699,
          checked: false,
          size: ["颜色:红色", "尺寸:41码"],
          origin_price: 3999,
          num: 5,
          desc:
            "OW联名款的篮球鞋，整体采用黑白红三种色调，撞色拼接带来视觉冲击感。鞋面密集透气孔设计，保证鞋内的空气循环，高帮的剪裁带来强有力包裹感，久穿更舒适。"
        },
        {
          id: 2,
          imageUrl:
            "https://m.360buyimg.com/mobilecms/jfs/t30295/217/876149475/204350/2bf874a/5c014ee5N9bf7bcd1.jpg!q70.jpg.webp",
          title: "OVB 刺绣连帽 棉服",
          price: 2199,
          checked: false,
          size: ["颜色:蓝色", "尺寸:M"],
          num: 5,
          origin_price: 2599,
          desc:
            "率性的宽松棉服，让温暖时髦并存，焕新街头时尚。BF风的大廓型，慵懒随性，自带气场。丰盈柔软的毛领从帽身蔓延至衣摆，优雅大气，保暖有型。后幅的刺绣元素，装点个性，洋溢不羁感。"
        },
        {
          id: 3,
          imageUrl:
            "https://m.360buyimg.com/mobilecms/jfs/t18079/273/2442465055/63574/60e1ee2b/5af558f7N044813ab.jpg!q70.jpg.webp",
          title: "华为保时捷设计手机",
          price: 5199,
          size: ["颜色:土豪金", "套餐:官方标配"],
          checked: false,
          num: 5,
          origin_price: 5899,
          desc:
            "这款融入保时捷设计的华为Mate RS可以称得上是真旗舰手机。外观源于跑车动力美学，机身的线条更为流畅，带来更华丽的颜值。内置麒麟970芯片，结合手机大内存，让娱乐和工作更方便。"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import url('http://at.alicdn.com/t/font_991092_fwa3vsu5ty.css');

.title {
  color: #999;
  width: 100%;
  overflow: hidden;

  .iconfont {
    font-size: 20px;
    width: 20%;
    color: #777;
    text-indent: 5%;
    height: 36px;
    line-height: 36px;
    padding: 8px auto;
    text-align: left;
    float: left;
    font-weight: 600;
    display: inline-block;
  }

  .title-top {
    font-size: 18px;
    width: 50%;
    text-align: left;
    text-indent: 5%;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 8px auto;
  }

  .label {
    width: 33%;
    float: left;
    text-align: center;
  }
}

.content {
  width: 90%;
  float: left;
  margin: 2% 5%;

  .goods-size {
    height: 20%;
    line-height: 20px;
    height: 20px;
    float: left;
    color: #888;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 33%;
  }
}
</style>


