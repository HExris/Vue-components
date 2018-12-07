<template>
  <div class="home">
    <ul v-for="(item,index) in components" :key="components+index">
      <router-link :to="item.name">
        <li>
          {{item.name}}
          <i class="iconfont icon-arrowright"></i>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Tree from "../components/Tree";
export default {
  name: "Home",
  data() {
    return {
      components: [Tree]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../utils/theme.scss";
.home {
  margin: 60px 0 50px;
}
ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
  li {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    line-height: 25px;
    font-size: 20px;
    padding: 10px;
    padding-left: 20px;
    cursor: pointer;
    transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    display: flex;
    align-items: center;
    color: #353535;
    a {
      display: block;
      flex: 1;
    }
  }
  .icon-arrowright {
    margin-left: auto;
    color: #353535;
  }
  li:hover {
    background-color: $lightTheme;
    & > a {
      color: #409eff;
    }
    .iconfont {
      color: #409eff;
      opacity: 0.8;
    }
  }
}
</style>
