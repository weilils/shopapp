<template>
  <div>
    <div class="title">
      <i class="iconfont icon-left" v-on:click="returnPrePage()"/>
      <span class="title-top">发表评价</span>
      <span class="publish">发布</span>
    </div>
    <div class="rate">
      <img :src="productimg" class="scaleimg">
      <span class="desc">描述相符:</span>
      <van-rate class="star" v-model="value"/>
    </div>
    <div class="input_content">
      <div class="text_input">
        <van-cell-group>
          <van-field
            v-model="message"
            type="textarea"
            placeholder="宝贝满足你的期待吗?说说你的使用心得，分享给想买的他们吧"
            rows="3"
            autosize
          />
        </van-cell-group>
      </div>
      <div class="img_input">
        <van-uploader
          :after-read="onRead"
          :before-read="bfRead"
          accept="image/*"
          multiple
          class="img_btn"
        >
          <van-icon name="photograph"/>
          <br>
          <span style="font-size: 11px;color: #aaa;">添加图片</span>
        </van-uploader>
      </div>
      <div class="img_border" v-for="img in rateimg">
        <img :src="img.value" class="show_img">
      </div>
    </div>
    <div class="bottom">
      <van-checkbox v-model="checked" checked-color="red" class="anonymous">
        <span>匿名</span>
      </van-checkbox>
      <span class="right_span">你写的评论能帮助其他的小伙伴呦</span>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import url('http://at.alicdn.com/t/font_991092_fwa3vsu5ty.css');

.input_content {
  width: 100%;
  overflow: hidden;

  .img_input {
    width: 60px;
    height: 60px;
    float: left;
    border: 1px dashed #ddd;

    .img_btn {
      padding-top: 35%;
    }
  }

  .img_border {
    width: 60px;
    height: 60px;
    float: left;
    border: 1px dashed #ddd;
    margin-left: 4px;

    .show_img {
      width: 100%;
    }
  }
}

.bottom {
  margin-top: 20px;
  border-top: 1px solid #f0f0f0;
  width: 100%;
  overflow hidden
  .anonymous {
    float left
    margin 8px 10px;
    text-align left
    width 45%
    color: #f0f0f0;
    span {
        color #777
    }
  }
   .right_span
   {
       width 50%
       text-align left 
       font-size 12px
       float left
       line-height 20px
   }
}

.title {
  color: #555;
  width: 100%;
  background: #fafafa;
  overflow: hidden;

  .iconfont {
    font-size: 20px;
    width: 15%;
    color: #777;
    text-indent: 5%;
    height: 48px;
    line-height: 48px;
    padding: 12px auto;
    text-align: left;
    float: left;
    font-weight: 600;
    display: inline-block;
  }

  .title-top {
    width: 40%;
    float: left;
    height: 48px;
    line-height: 48px;
    text-align: left;
  }

  .publish {
    width: 40%;
    float: left;
    height: 48px;
    line-height: 48px;
    text-align: right;
    color: #ff0033;
  }
}

.rate {
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;

  .scaleimg {
    height: 40px;
    width: 40px;
    float: left;
    margin-left: 10px;
  }

  .desc {
    width: 30%;
    height: 40px;
    text-align: left;
    text-indent: 15px;
    line-height: 40px;
    float: left;
  }

  .star {
    width: 40%;
    height: 40px;
    margin-top: 9px;
    text-align: left;
    float: left;
  }
}
</style>
<script>
import { Toast } from "vant";

export default {
  methods: {
    onRead(file) {
      console.log(file);
      this.rateimg.push({ index: this.rateimg.length, value: file.content });
    },
    bfRead(file) {
      if (this.rateimg.length >= 4) {
        console.log(this.rateimg.length);
        Toast("最多添加4张图片");
        return false;
      } else {
        return true;
      }
    }
  },
  data() {
    return {
      message: "",
      checked: false,
      rateimg: [],
      disabled: true,
      value: 1,
      productimg:
        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/19627/38/3694/220372/5c2a4090E61182f28/a0b25d79d58a4bd8.jpg!q80.dpg.webp"
    };
  }
};
</script>
