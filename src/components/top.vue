<template>
    <van-nav-bar
  :title='msg'
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
</template>
<script>
export default {
    methods: {
    onClickLeft() {
      Toast('返回');
    },
    },
    props: {
    msg: String
  }
}
</script>
