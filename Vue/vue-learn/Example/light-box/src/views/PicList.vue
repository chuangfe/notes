<template>
  <div class="pic-list">
    <h2>Pic List Page</h2>
    <router-link class="pic" to="/pic/1">Pic 1</router-link>
    <router-link class="pic" to="/pic/2">Pic 2</router-link>
  </div>
</template>

<script>
export default {
  name: "PicList",
  components: {},
};
</script>

<style scoped lang="scss">
.pic {
  display: inline-block;
  width: 150px;
  height: 100px;
  border: 2px solid;
  margin: 10px;
}
</style>
