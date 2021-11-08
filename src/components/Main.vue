<template>
  <main class="main-container">
    <div class="top">
      <Header />
    </div>

    <div class="bottom">
      <div class="left">
        <Nav />
      </div>

      <div class="right">
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  name: "Main",
  components: {
    Header,
    Nav,
  },
});
</script>

<style scoped lang="less">
@import "../style/base.less";

.main-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: @secondBackgroundColor;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
  }
  .bottom {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      position: relative;
      width: 80px;
      height: 100%;
      box-sizing: border-box;
    }
    .right {
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 10px 10px 10px;
      .content {
        position: relative;
        width: 100%;
        height: 100%;
        background: @backgroundColor;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 10px;
      }
    }
  }
}
</style>
