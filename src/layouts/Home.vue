<template>
  <div class="home-layout">
    <Header :title="BaseConfig.title"/>
    <router-view/>
    <Footer :copyright-year="BaseConfig.copyrightYear" :author="BaseConfig.author"/>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BaseConfig from '../config/base-conf.json';

export default {
  name: "HomeLayout",
  data(){
      return {
          BaseConfig: {}
      }
  },
  components: {
    Header,
    Footer
  },
  beforeMount(){
      this.BaseConfig = BaseConfig
  }
};
</script>
