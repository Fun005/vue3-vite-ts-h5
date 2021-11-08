<template>
  <div class="home-container page-container">
    <img
      class="vue-element-plus-logo"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <div class="page-title">Vite2.x + Vue3.x + TypeScript + Element Plus</div>
    <el-button @click="jump('axios')" type="primary">goAxios</el-button>
    <el-button @click="jump('vuex')" type="primary">goVuex</el-button>
    <el-button @click="jump('pinia')" type="primary">goPinia</el-button>
    <el-button @click="jump('test')" type="primary">goTest</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"

export default defineComponent({
  name: "HomePage",
  setup() {
    const router = useRouter()
    const jump = (value: string): void => {
      router.push({
        path: value,
        params: {
          a: "value"
        }
      })
    }

    return {
      jump
    }
  }
})
</script>

<style scoped lang="less">
.home-container {
  .vue-element-plus-logo {
    width: 50%;
  }
}
</style>
