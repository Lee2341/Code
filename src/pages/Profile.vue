<template>
  <div class="profile-page">
    <!-- 导航栏 -->
    <van-nav-bar title="我的" :style="{ backgroundColor: '#0097FF', color: 'white' }" />
    
    <!-- 用户信息区域 -->
    <div class="user-info">
      <div class="user-avatar">
        <van-icon name="user-circle-o" size="60" color="#0097FF" />
      </div>
      <div class="user-details">
        <h3>用户昵称</h3>
        <p>手机号：138****8888</p>
      </div>
      <van-button size="small" type="primary" @click="goToLogin">登录</van-button>
    </div>
    
    <!-- 功能菜单 -->
    <div class="menu-section">
      <van-cell-group>
        <van-cell title="我的订单" icon="orders-o" is-link @click="goToOrder" />
        <van-cell title="收货地址" icon="location-o" is-link />
        <van-cell title="优惠券" icon="coupon-o" is-link />
        <van-cell title="积分商城" icon="points" is-link />
      </van-cell-group>
    </div>
    
    <div class="menu-section">
      <van-cell-group>
        <van-cell title="客服中心" icon="service" is-link />
        <van-cell title="意见反馈" icon="chat-o" is-link />
        <van-cell title="关于我们" icon="info-o" is-link @click="goToAbout" />
      </van-cell-group>
    </div>
    
    <div class="menu-section">
      <van-cell-group>
        <van-cell title="设置" icon="setting-o" is-link />
      </van-cell-group>
    </div>
    
    <!-- 退出登录按钮 -->
    <div class="logout-section">
      <van-button block type="danger" plain @click="handleLogout">退出登录</van-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showConfirmDialog, showSuccessToast } from 'vant'

const router = useRouter()

// 跳转到登录页面
const goToLogin = () => {
  router.push('/login')
}

// 跳转到订单页面
const goToOrder = () => {
  router.push('/order')
}

// 跳转到关于页面
const goToAbout = () => {
  router.push('/about')
}

// 退出登录
const handleLogout = () => {
  showConfirmDialog({
    title: '确认退出',
    message: '确定要退出登录吗？',
  })
    .then(() => {
      // 这里可以清除用户登录状态
      showSuccessToast('已退出登录')
      router.push('/home')
    })
    .catch(() => {
      // 用户取消退出
    })
}
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.user-info {
  background: linear-gradient(135deg, #0097FF, #0066CC);
  padding: 30px 20px;
  display: flex;
  align-items: center;
  color: white;
}

.user-avatar {
  margin-right: 15px;
}

.user-details {
  flex: 1;
}

.user-details h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 500;
}

.user-details p {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}

.menu-section {
  margin: 10px 0;
}

.logout-section {
  padding: 30px 20px;
}

/* 导航栏样式 */
:deep(.van-nav-bar__title) {
  color: white !important;
}

/* 单元格样式 */
:deep(.van-cell) {
  padding: 15px 16px;
}

:deep(.van-cell__title) {
  font-size: 16px;
}

:deep(.van-cell__left-icon) {
  margin-right: 12px;
  font-size: 20px;
}
</style> 