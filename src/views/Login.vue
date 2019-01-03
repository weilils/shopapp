<template>
  <div>
    <div class="top">
      <div class="logo"></div>
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        label="用户名"
        icon="question-o"
        placeholder="请输入用户名"
        @click-icon="$toast('question')"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
     <van-field
      v-model="sms"
      center
      clearable
      label="验证码"
      autosize
      placeholder="请输入验证码" style="height:60px" >
    <img src="../assets/testvery.png" slot="icon" style="height:40px" alt="sadsasd">
  </van-field>

    </van-cell-group>
    <div class="loginbtn">
      <van-button round type="primary" size="large">登陆</van-button>
      <router-link to="/registe" >
          <a href="#" class="register_href" >没有账号，立即注册</a>
      </router-link>
    </div>
    
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.top {
  width: 100%;
  height: 100px;
  background: url('../assets/bg_top.png') no-repeat;
  background-size: 100% 100%;

  .logo {
    width: 100px;
    height: 100px;
    background: url('../assets/logo.png');
    background-size: contain;
    margin-left: 38%;
  }
}
.loginbtn
  width 90%
  margin 20px 5%
  .register_href
    display inline-block
    width 100%
    margin-top 10px
    font-size 15px
    text-align right 
.field 
  height 60px
</style>

