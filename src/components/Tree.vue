<template>
  <div class="tree">{{TreeName}}</div>
</template>

<script>
export default {
  name: "Tree",
  data() {
    return {
      TreeName: "Father Tree",
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 40px;
  text-align: center;
  font-weight: normal;
}
</style>
