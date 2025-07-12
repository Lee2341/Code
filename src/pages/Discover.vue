<template>
  <div class="discover-page">
    <!-- 导航栏 -->
    <van-nav-bar title="发现" :style="{ backgroundColor: '#0097FF', color: 'white' }" />
    
    <!-- 页面内容 -->
    <div class="discover-content">
      <div class="discover-item">
        <van-icon name="search" size="40" color="#0097FF" />
        <h3>搜索功能</h3>
        <p>发现更多精彩内容</p>
      </div>
      
      <div class="discover-item">
        <van-icon name="hot-o" size="40" color="#ff6b6b" />
        <h3>热门推荐</h3>
        <p>当前最受欢迎的内容</p>
      </div>
      
      <div class="discover-item">
        <van-icon name="star-o" size="40" color="#ffd93d" />
        <h3>精选推荐</h3>
        <p>为您精心挑选的内容</p>
      </div>
      
      <div class="discover-item">
        <van-icon name="location-o" size="40" color="#6bcf7f" />
        <h3>附近</h3>
        <p>发现身边的精彩</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.discover-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.discover-content {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.discover-item {
  background: white;
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.discover-item:active {
  transform: scale(0.98);
}

.discover-item h3 {
  margin: 15px 0 8px 0;
  font-size: 16px;
  color: #333;
}

.discover-item p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

/* 导航栏样式 */
:deep(.van-nav-bar__title) {
  color: white !important;
}
</style> 