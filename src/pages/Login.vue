<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      title="用户登陆"
      :style="{ backgroundColor: '#0097FF', color: 'white' }"
      left-arrow
      @click-left="goBack"
    />
    
    <!-- 登录表单 -->
    <div class="login-form">
      <!-- 手机号码输入框 -->
      <van-field
        v-model="phoneNumber"
        label="手机号码："
        placeholder="手机号码"
        type="tel"
        maxlength="11"
        clearable
      />
      
      <!-- 密码输入框 -->
      <van-field
        v-model="password"
        label="密码："
        placeholder="密码"
        type="password"
        clearable
      />
      
      <!-- 登录按钮 -->
      <van-button
        type="success"
        size="normal"
        class="login-btn"
        @click="handleLogin"
        :loading="loading"
      >
        登陆
      </van-button>
      
      <!-- 去注册按钮 -->
      <van-button
        type="default"
        size="normal"
        class="register-btn"
        @click="goToRegister"
      >
        去注册
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast, showSuccessToast, showFailToast } from 'vant'

const router = useRouter()

// 响应式数据
const phoneNumber = ref('')
const password = ref('')
const loading = ref(false)

// 返回上一页
const goBack = () => {
  router.go(-1)
}

// 处理登录
const handleLogin = async () => {
  // 表单验证
  if (!phoneNumber.value) {
    showToast('请输入手机号码')
    return
  }
  
  if (!password.value) {
    showToast('请输入密码')
    return
  }
  
  // 手机号格式验证
  const phoneRegex = /^1[3-9]\d{9}$/
  if (!phoneRegex.test(phoneNumber.value)) {
    showToast('请输入正确的手机号码')
    return
  }
  
  // 模拟登录请求
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    showSuccessToast('登录成功')
    router.replace('/home')
  } catch (error) {
    showFailToast('登录失败，请重试')
  } finally {
    loading.value = false
  }
}

// 跳转到注册页面
const goToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.login-form {
  padding: 20px;
}

.login-btn {
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  height: 45px;
  background-color: #4CAF50;
  border-color: #4CAF50;
  font-size: 16px;
}

.register-btn {
  width: 100%;
  height: 45px;
  background-color: #E0E0E0;
  color: #666;
  font-size: 16px;
}
</style>