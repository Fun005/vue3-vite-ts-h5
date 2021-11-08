<template>
  <div class="vuex-container page-container">
    <div class="page-title">Pinia Test Page</div>
    <p>pinia count is: {{ count }}</p>
    <p>pinia double count is: {{ doubleCount }}</p>
    <el-button type="primary" @click="addCount(2)">add</el-button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import useCountStore from "@/store/count"

const { addCount } = useCountStore()
const { count, doubleCount } = storeToRefs(useCountStore())
</script>
