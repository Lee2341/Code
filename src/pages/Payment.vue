<template>
  <div class="payment-page">
    <van-nav-bar
        title="支付页面"
        left-arrow
        @click-left="$router.back()"
    />

    <div class="payment-content">
      <h3>支付订单</h3>
      <p>应付金额：<span class="amount">¥36.00</span></p>

      <van-radio-group v-model="paymentMethod">
        <van-cell-group>
          <!-- 微信支付 -->
          <van-cell clickable @click="paymentMethod = 'wechat'">
            <template #title>
              <div class="pay-title">
                <img src="@/assets/img/wechat.png" class="pay-icon" alt="微信" />
                <span></span>
              </div>
            </template>
            <template #right-icon>
              <van-radio name="wechat" />
            </template>
          </van-cell>

          <!-- 支付宝支付 -->
          <van-cell clickable @click="paymentMethod = 'alipay'">
            <template #title>
              <div class="pay-title">
                <img src="@/assets/img/alipay.png" class="pay-icon" alt="支付宝" />
                <span></span>
              </div>
            </template>
            <template #right-icon>
              <van-radio name="alipay" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>

      <van-button type="primary" block class="pay-btn" @click="payNow">
        确认支付
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const paymentMethod = ref('wechat')

const payNow = () => {
  showToast('支付成功！')
  // 支付完成后跳转首页或订单页
  router.push('/')
}
</script>

<style scoped>
.payment-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}
.payment-content {
  padding: 16px;
}
.amount {
  color: #f44;
  font-size: 20px;
  font-weight: bold;
}
.pay-btn {
  margin-top: 30px;
}
</style>
