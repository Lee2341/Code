<template>
  <div class="order-confirm-page">
    <van-nav-bar
        title="确认订单"
        left-arrow
        @click-left="$router.back()"
    />

    <div class="order-content">
      <div>订单配送至：</div>
      <h3>沈阳市浑南区智慧四街1-121号</h3>
      <div>习近平先生 13654785432</div>

      <van-cell title="配送地址" value="沈阳市规划大厦" icon="location-o" />
      <van-cell title="支付方式" value="在线支付" icon="balance-o" />
      <van-cell title="备注" value="无" icon="edit" />

      <van-button type="primary" block class="submit-btn" @click="submitOrder">
        去支付
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const submitOrder = () => {
  router.push({ name: 'Payment' })
}

</script>

<style scoped>
.order-confirm-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}

.order-content {
  padding: 16px;
}

.submit-btn {
  margin-top: 30px;
}
</style>
