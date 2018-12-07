<template>
  <div class="footer">
    &copy;
    <span>{{copyrightYear}}</span>
    <span class="with-love">
      <i class="iconfont icon-love"></i>
    </span>
    <span class="author">{{author}}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      title: `Exris's Components Library`
    };
  },
  props:[
    'author',
    'copyrightYear'
  ]
};
</script>

<style lang="scss" scoped>
@import "../utils/theme.scss";
.footer {
  background-color: $themeColor;
  color: #fff;
  height: 45px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 45px;
  display: flex;
  justify-content: center;
  .with-love{
      color: skyblue;
      transition: color .3s linear;
      margin: 0 7px;
  }
  .with-love:hover{
      color: red;
  }
}
</style>
