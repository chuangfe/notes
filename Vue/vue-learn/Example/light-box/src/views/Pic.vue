<template>
  <div class="pic">
    <h1>Pic Page</h1>
    <div class="pic-big">{{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  name: "Pic",
  components: {},
};
</script>

<style scoped lang="scss">
.pic-big {
  margin: 0 auto;
  width: 600px;
  height: 400px;
  border: 2px solid;
}

h1 {
  height: 2rem;
  line-height: 2rem;
  margin-bottom: 20px;
}
</style>
