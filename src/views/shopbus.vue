<template>
  <div>
    <div v-for="(goods,index) in imageList" :key="index" class="goods_inf">
      <div class="checkbox">
        <van-checkbox v-model="goods.checked" style="margin-top:80%;"></van-checkbox>
      </div>
      <div class="card">
        <van-card
          :num="goods.num"
          tag="热销"
          :price="goods.price"
          :title="goods.title"
          :thumb="goods.imageUrl"
          :origin-price="goods.origin_price"
        >
          <div slot="footer">
            <i class="iconfont icon-plus" v-on:click="addgoods(index,goods.num)"></i>&nbsp;
            <i class="iconfont icon-jianshao" v-on:click="decrease(index,goods.id,goods.num)"></i>
          </div>
          <div
            slot="desc"
            class="van-ellipsis"
            style="position: absolute;width:100%;"
          >{{goods.desc}}</div>
        </van-card>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" v-on:change="selectAll()">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import { Checkbox, CheckboxGroup } from "vant";
export default {
  data() {
    return {
      imageList: [
        {
          id: 1,
          imageUrl:
            "https://m.360buyimg.com/mobilecms/jfs/t29347/193/1027658446/305248/c9bfc7f/5c04fdeaN744a9b56.png.webp",
          title: "NIKE AJ乔1 篮球鞋",
          price: 3699,
          checked:false,
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
          checked:false,
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
          checked:false,
          num: 5,
          origin_price: 5899,
          desc:
            "这款融入保时捷设计的华为Mate RS可以称得上是真旗舰手机。外观源于跑车动力美学，机身的线条更为流畅，带来更华丽的颜值。内置麒麟970芯片，结合手机大内存，让娱乐和工作更方便。"
        }
      ],
      checked: false,
    };
  },
  methods: {
    addgoods: function(index, num) {
      this.$set(this.imageList[index], `num`, ++num);
    },
    decrease: function(index, id, num) {
      if (num > 1) {
        this.$set(this.imageList[index], `num`, --num);
      } else {
        this.imageList = this.imageList.filter(t => t.id != id);
      }
    },
    onSubmit: function() {
      console.log("submit clicked");
    },
    selectAll:function()
    {
      if(this.checked)
        for(var i=0;i<this.imageList.length;i++){
          this.$set(this.imageList[i],`checked`,true);
          }
      else
        for(var i=0;i<this.imageList.length;i++){
         this.$set(this.imageList[i],`checked`,false);
        }
    }
  }
};
</script>
<style scoped>
@import url("https://at.alicdn.com/t/font_991092_fwa3vsu5ty.css");
.checkbox{
  width:9%;
  float: left;
  height: 100%;
}
.card {
  width: 90%;
  float: left;
}
.goods_inf
{
  background: #fafafa;
  overflow: hidden;
}
</style>
