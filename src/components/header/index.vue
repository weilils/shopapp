<template>
  <div class="header">
    <div class="background" :style="{backgroundImage: 'url(' + seller.avatar +')'}"></div>
    <div class="content-wrapper">
      <div class="avater">
        <img width="64" :src="seller.avatar" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="desc">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="class_type[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="count-content" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right newclass"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span>
      <span class="bulletin-text" v-if="seller.bulletin">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script >
/* eslint-disable */
const MSSG_OK = 0; //正常返回的标识
export default {
  data() {
    return { seller: {}, class_type: [] };
  },
  created() {
    this.axios.get("http://172.16.10.42:8080/api/seller").then(response => {
      // console.log(response);
      response = response.data;
      if (response.errno == MSSG_OK) {
        this.seller = response.data;
        this.class_type = ["type0", "type1", "type2", "type3", "type4"];
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/common/css/minxin.styl';

.header {
  margin-top: -59 px;
  text-align: left;
  color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  background: #666;
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    opacity 0.4
    filter: blur(4px);
  }

  .bulletin-wrapper {
    position: relative;
    height: 28px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0px 15px 0px 12px;
    overflow: hidden;
    background: rgba(7, 17, 27, 0.2);
    line-height: 28px;
    display: block;
    .bulletin-text {
      font-size: 10px;
    }
    .bulletin-icon {
      width: 24px;
      margin: 0px 4px;
      height: 12px;
      background-size: 24px 12px;
      display: inline-block;
      bag-img('./resource/bulletin');
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      right: 0px;
      bottom: 6px;
      font-size: 18px;
    }
  }

  .content-wrapper {
    position: relative;
    padding: 24px 12px 15px 24px;
    font-size: 0;

    .count-content {
      position: absolute;
      bottom: 18px;
      right: 12px;
      width: 36px;
      height: 24px;
      padding: 0px 8px;
      border-radius: 16px;
      background: rgba(0, 0, 0, 0.2);
      line-height: 24px;
      text-align: center;

      .count {
        vertical-align: top;
        font-size: 10px;
      }

      .newclass {
        margin-left: 4px;
        line-height: 24px;
        font-size: 10px;
      }
    }

    .avater {
      margin-left: 0px;
      display: inline-block;
    }

    .content {
      margin-left: 16px;
      font-size: 12px;
      display: inline-block;

      .title {
        margin-top: 2px;

        .name {
          margin-left: 6px;
          font-weight: 200;
          font-size: 16px;
          line-height: 12px;
        }

        .brand {
          display: inline-block;
          vertical-align: bottom; // 设置对齐方式
          height: 18px;
          width: 30px;
          bag-img('./resource/brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
      }

      .desc {
        margin-top: 8px;
        font-size: 12px;
        line-height: 12px;
        font-weight: 200;
      }

      .support {
        margin-top: 10px;
        font-size: 10px;
        line-height: 12px;
        font-weight: 200;

        .icon {
          display: inline-block;
          vertical-align: bottom;
          width: 12px;
          height: 12px;
          background-repeat: no-repeat;
          background-size: 12px 12px;

          &.type0 {
            bag-img('./resource/decrease_1');
          }

          &.type1 {
            bag-img('./resource/discount_1');
          }

          &.type2 {
            bag-img('./resource/special_1');
          }

          &.type3 {
            bag-img('./resource/invoice_1');
          }

          &.type4 {
            bag-img('./resource/guarantee_1');
          }
        }
      }
    }
  }
}
</style>
