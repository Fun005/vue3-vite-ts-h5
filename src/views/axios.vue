<template>
  <div class="axios-container page-container">
    <div class="page-title">Axios Test Page</div>
    <div class="user-info-container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Fun005</span>
            <el-button class="button" type="text" @click="getUserInfo"
              >点击获取Fun005信息
            </el-button>
          </div>
        </template>
        <div class="info-list-box" v-loading="loading">
          <div class="text item" v-if="userInfo?.name">
            name: {{ userInfo?.name }}
          </div>
          <div class="text item" v-if="userInfo?.bio">
            bio: {{ userInfo?.bio }}
          </div>
          <div class="text item" v-if="userInfo?.blog">
            blog: {{ userInfo?.blog }}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import axios from "@/utils/axios"

const userInfo = ref(null)
const loading = ref(false)
const getUserInfo = () => {
  loading.value = true
  axios
    .get("/users/Fun005")
    .then((response) => {
      console.log("response: ", response.data)
      userInfo.value = response.data
      loading.value = false
    })
    .catch((error) => {
      loading.value = false
      console.error(error)
    })
}
</script>
<style scoped lang="less">
.axios-container {
  .user-info-container {
    display: flex;
    justify-content: center;
    width: 100%;
    .info-list-box {
      padding: 10px;
      .text {
        font-size: 14px;
      }
      .item {
        margin-bottom: 18px;
      }
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .box-card {
      width: 480px;
    }
  }
}
</style>
