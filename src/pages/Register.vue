<template>
  <div class="register-container">
    <!-- 导航栏 -->
    <van-nav-bar
      title="用户注册"
      :style="{ backgroundColor: '#0097FF', color: 'white' }"
      left-arrow
      @click-left="goBack"
    />
    
    <!-- 注册表单 -->
    <div class="register-form">
      <!-- 手机号码输入框 -->
      <van-field
        v-model="formData.phone"
        label="手机号码："
        placeholder="手机号码"
        type="tel"
        maxlength="11"
        clearable
      />
      
      <!-- 密码输入框 -->
      <van-field
        v-model="formData.password"
        label="密码："
        placeholder="密码"
        type="password"
        clearable
      />
      
      <!-- 确认密码输入框 -->
      <van-field
        v-model="formData.confirmPassword"
        label="确认密码："
        placeholder="确认密码"
        type="password"
        clearable
      />
      
      <!-- 用户姓名输入框 -->
      <van-field
        v-model="formData.username"
        label="用户姓名："
        placeholder="用户姓名"
        clearable
      />
      
      <!-- 性别选择 -->
      <div class="gender-section">
        <span class="gender-label">性别：</span>
        <van-radio-group v-model="formData.gender" direction="horizontal" class="gender-group">
          <van-radio name="male" class="gender-radio">男</van-radio>
          <van-radio name="female" class="gender-radio">女</van-radio>
        </van-radio-group>
      </div>
      
      <!-- 注册按钮 -->
      <van-button
        type="success"
        size="normal"
        class="register-btn"
        @click="handleRegister"
        :loading="loading"
      >
        注册
      </van-button>
      
      <!-- 去登录按钮 -->
      <van-button
        type="default"
        size="normal"
        class="login-btn"
        @click="goToLogin"
      >
        已有账号，去登录
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
const formData = ref({
  phone: '',
  password: '',
  confirmPassword: '',
  username: '',
  gender: 'male'
})
const loading = ref(false)

// 返回上一页
const goBack = () => {
  router.go(-1)
}

// 注册处理
const handleRegister = async () => {
  // 表单验证
  if (!formData.value.phone) {
    showToast('请输入手机号码')
    return
  }
  
  if (!formData.value.password) {
    showToast('请输入密码')
    return
  }
  
  if (!formData.value.confirmPassword) {
    showToast('请输入确认密码')
    return
  }
  
  if (formData.value.password !== formData.value.confirmPassword) {
    showToast('两次输入的密码不一致')
    return
  }
  
  if (!formData.value.username) {
    showToast('请输入用户姓名')
    return
  }
  
  // 手机号格式验证
  const phoneRegex = /^1[3-9]\d{9}$/
  if (!phoneRegex.test(formData.value.phone)) {
    showToast('请输入正确的手机号码')
    return
  }
  
  // 密码长度验证
  if (formData.value.password.length < 6) {
    showToast('密码长度不能少于6位')
    return
  }
  
  // 模拟注册请求
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    showSuccessToast('注册成功')
    // 注册成功后跳转到登录页面
    router.replace('/login')
  } catch (error) {
    showFailToast('注册失败，请重试')
  } finally {
    loading.value = false
  }
}

// 跳转到登录页面
const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.register-form {
  padding: 20px;
}

.gender-section {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 1px;
  background-color: white;
}

.gender-label {
  width: 80px;
  color: #333;
  font-size: 14px;
}

.gender-group {
  flex: 1;
}

.gender-radio {
  margin-right: 30px;
}

.gender-radio :deep(.van-radio__label) {
  font-size: 14px;
  color: #333;
  margin-left: 8px;
}

.gender-radio :deep(.van-radio__icon--checked) {
  background-color: #0097FF;
  border-color: #0097FF;
}

.register-btn {
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  height: 45px;
  background-color: #4CAF50;
  border-color: #4CAF50;
  font-size: 16px;
}

.login-btn {
  width: 100%;
  height: 45px;
  background-color: #E0E0E0;
  color: #666;
  font-size: 16px;
}

/* 自定义导航栏样式 */
:deep(.van-nav-bar__title) {
  color: white !important;
}

:deep(.van-icon) {
  color: white !important;
}

/* 输入框样式调整 */
:deep(.van-field__label) {
  width: 80px;
  color: #333;
}

:deep(.van-field__control) {
  color: #333;
}
</style> 