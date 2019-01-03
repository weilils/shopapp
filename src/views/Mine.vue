<template>
  <div class="content">
    <div class="top">
      <div class="user_img van-hairline--bottom">
        <span class="title_label">头像</span>
        <input type="file" accept="image/*" class="main-1mfZE">
        <img class="bord_img" src="../assets/user_img.png">
        <van-icon name="arrow" size="20px" class="img_icon"/>
      </div>
      <div class="username">
        <span class="username_label">用户名</span>
        <router-link to="/username">
          <span class="username_content">测试账号</span>
          <van-icon name="arrow" size="20px" class="img_icon_s1"/>
        </router-link>
      </div>
    </div>
    <div class="interval">账号绑定</div>
    <div class="emil">
      <van-icon name="envelop-o" size="25px" class="envelop-o"/>
      <span class="emil_label">邮箱</span>
      <router-link to="/email" class="username_email">
        <span>test@qq.com</span>
        <van-icon name="arrow" size="20px" class="img_icon_s2"/>
      </router-link>
    </div>
    <div class="interval_s2">安全设置</div>
    <div class="scurity_manager">
      <span>登陆密码</span>
      <router-link to="/password" class="password">
        <span>修改</span>
      </router-link>
    </div>
    <div class="interval_s3"></div>
    <div>
      <button class="loginout" v-on:click="loginout()">退出登陆</button>
    </div>
    <div class="interval_s3"></div>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  methods: {
    loginout:function()
    {
      Toast("注销成功");
    },
  }
}
</script>

<style scoped>
.user_img {
  width: 100%;
  height: 110px;
  clear: both;
}
.title_label {
  font-size: 21px;
  display: block;
  font-weight: 800;
  margin: 20px 5px;
  float: left;
  width: 20%;
  height: 100px;
}
.bord_img {
  width: 60px;
  top: 5px;
  position: fixed;
  z-index: 5;
  height: 60px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 60%;
}
.img_icon {
  position: absolute;
  z-index: 5;
  width: 20px;
  height: 20px;
  right: 73px;
  color: #999;
  top: 23px;
}
.main-1mfZE {
  position: fixed;
  right: 0px;
  z-index: 10;
  border: 1px solid red;
  width: 420px;
  height: 70px;
  opacity: 0;
}
.username {
  clear: both;
  width: 100%;
  position: relative;
  height: 60px;
}
.username_label {
  font-size: 21px;
  display: block;
  font-weight: 800;
  margin: 2px 15px;
  float: left;
  width: 20%;
  height: 100px;
}
.username_content {
  font-size: 15px;
  text-decoration: none;
  color: black;
  margin-left: 35px;
  margin-top: 2px;
}
.interval {
  background-color: #eee;
  color: #999;
  text-align: left;
  line-height: 50px;
  height: 50px;
  text-indent: -93px;
}
.interval_s2 {
  background-color: #eee;
  color: #999;
  text-align: left;
  line-height: 50px;
  height: 50px;
  text-indent: 25px;
}
.interval_s3 {
  background-color: #eee;
  height: 25px;
}
.emil {
  text-align: left;
  position: relative;
  padding: 8px 5px;
}
.envelop-o {
  position: absolute;
  margin-left: 14px;
}
.emil_label {
  font-size: 15px;
  margin-left: 40px;
  display: inline-block;
}
.scurity_manager {
  text-align: left;
  text-indent: 23px;
  font-size: 15px;
  line-height: 30px;
  position: relative;
  height: 30px;
}
.emil_content {
  text-indent: 170px;
  display: inline-block;
}
.username_email {
  margin-left: 37%;
}
.password {
  margin-left: 50%;
}
.img_icon_s1 {
  position: absolute;
  top: 0px;
  right: 68px;
  color: #999;
}
.img_icon_s3 {
  position: absolute;
  top: 6px;
  right: 68px;
  color: #999;
}
.img_icon_s2 {
  position: absolute;
  top: 8px;
  right: 68px;
  color: #999;
}
.loginout {
  width: 100%;
  background: #fff;
  height: 50px;
  color: red;
  font-weight:700;
  font-size: 19px;
  border: none;
}
</style>


