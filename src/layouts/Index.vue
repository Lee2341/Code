<template>
  <div class="layout-index">
    <!-- 主要内容区域 -->
    <div class="main-content">
      <router-view />
    </div>
    
    <!-- 底部导航栏 -->
    <van-tabbar v-model="activeTab" fixed>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/discover">发现</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const activeTab = ref(0)
const route = useRoute()

// 根据当前路由设置活跃的 tab
watch(() => route.path, (newPath) => {
  switch (newPath) {
    case '/home':
      activeTab.value = 0
      break
    case '/discover':
      activeTab.value = 1
      break
    case '/order':
      activeTab.value = 2
      break
    case '/profile':
      activeTab.value = 3
      break
    default:
      activeTab.value = 0
  }
}, { immediate: true })
</script>

<style scoped>
.layout-index {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-content {
  padding-bottom: 50px; /* 为底部导航栏留出空间 */
}

.van-tabbar {
  border-top: 1px solid #eee;
}
</style> 