<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pic">Pic List</router-link> |
    <router-link to="/pic/1">Pic 1</router-link> |
    <router-link to="/pic/2">Pic 2</router-link>
  </div>
  <router-view />
  <div class="light-box" v-show="$route.meta.onOff">
    <div class="content">
      <router-view name="LightBox" />
    </div>
    <button class="close" @click="closeHandler">X</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      index: 1,
    };
  },
  methods: {
    closeHandler() {
      // 跳轉到 light box 開啟前的歷史紀錄
      this.$router.go(this.$store.state.len * -1);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.light-box {
  width: 100vw;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 10vh;

  .content {
    width: 800px;
    height: 600px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    position: relative;
  }

  .close {
    font-size: 48px;
    position: absolute;
    left: 20px;
    top: 20px;
  }
}
</style>
