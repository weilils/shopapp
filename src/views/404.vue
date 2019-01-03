<template>
  <div class="s1">
    <div class="wrap">
      <table>
        <tr>
          <td rowspan="5" style>
            <img
              src="https://ws1.sinaimg.cn/large/a15b4afegy1fhsfdznep4j2020020web.jpg"
              alt="又一个极简的错误页面"
            >
          </td>
          <td class="header">很抱歉！当前页面找不到了</td>
        </tr>
        <tr>
          <td>原因一：你输入了错误的网址</td>
        </tr>
        <tr>
          <td>原因二：这个页面已经被网站管理员删了</td>
        </tr>
        <tr>
          <td>
            如果刷新页面没能解决问题，你可以前往
            <a href="https://mkblog.cn/about/#respond">本站留言板</a>反馈
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            title:"404 not found"
        }
    }
};
</script>
<style lang="stylus" scoped>
.s1 {
  font-size: 14px;
  font-family: 'helvetica neue', tahoma, arial, 'hiragino sans gb', 'microsoft yahei', 'Simsun', sans-serif;
  background-color: #fff;
  color: #808080;
}

.wrap {
  margin: 200px auto;
  width: 100%;
}

td {
  text-align: left;
  padding: 2px 10px;
}

td.header {
  font-size: 22px;
  padding-bottom: 10px;
  color: #000;
}

td.check-info {
  padding-top: 20px;
}

a {
  color: #328ce5;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

