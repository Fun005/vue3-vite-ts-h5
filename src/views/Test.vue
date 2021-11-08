<template>
  <div>
    <p>test page: {{ msg }}</p>
    <ul>
      <li v-for="item in state.list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"

const msg = ref("testmsg")
const state = reactive({
  list: [1, 3, 4]
})
setTimeout(() => {
  state.list = [2, 34, 4]
}, 2000)
</script>
