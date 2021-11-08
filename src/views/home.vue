<template>
  <div class="home-container page-container">
    <img
      class="vue-element-plus-logo"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <div class="page-title">
      Vue3.x + Vite2.x + TypeScript + pinia + varlet + Element Plus
    </div>

    <var-space :size="[10, 10]">
      <var-button type="danger">危险按钮</var-button>
      <var-button @click="jump('axios')" type="primary">goAxios</var-button>
      <var-button @click="jump('pinia')" type="success">goPinia</var-button>
      <var-button @click="jump('test')" type="warning">goTest</var-button>
    </var-space>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()
const jump = (value: string): void => {
  router.push({
    path: value,
    params: {
      a: "value"
    }
  })
}
</script>

<style scoped lang="less">
.home-container {
  .vue-element-plus-logo {
    width: 50%;
  }
}
</style>
