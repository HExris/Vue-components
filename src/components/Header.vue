<template>
  <div class="header"><i class="iconfont icon-H"></i>{{title}}</div>
</template>

<script>
export default {
  name: "Header",
  props:[
    'title'
  ]
};
</script>

<style lang="scss" scoped>
@import "../utils/theme.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $themeColor;
  color: #fff;
  padding: 0 20px;
  font-size: 20px;
  line-height: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  .icon-H{
    font-size: 16px;
  }
}
</style>
