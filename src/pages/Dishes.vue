<template>
  <div class="dishes-page p-4">
    <!-- 顶部导航栏 -->
    <van-nav-bar
        title="商家信息"
        left-arrow
        @click-left="$router.back()"
    />

    <!-- 菜品列表区域 -->
    <div class="dish-list">
      <div
          v-for="(dish, index) in dishes"
          :key="index"
          class="dish-item"
      >
        <div class="dish-image">
          <img :src="dish.image" :alt="dish.name" />
        </div>

        <div class="dish-info">
          <h3>{{ dish.name }}</h3>
          <p class="desc">{{ dish.description }}</p>
          <div class="price-section">
            <span class="price">¥{{ dish.price }}</span>
            <van-button size="small" type="primary">加入购物车</van-button>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 80px;"></div>
  </div>

  <van-submit-bar
      :price="1288"
      button-text="去支付"
      @submit="goToCheckout"
      safe-area-inset-bottom
  >
    <!-- 自定义左侧购物车图标 -->
    <template #tip>
      <div class="cart-left">
        <van-icon name="shopping-cart-o" size="22" />
        <span style="margin-left: 8px;">购物车</span>
      </div>
    </template>
  </van-submit-bar>

</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import router from "@/router/index.js";

const route = useRoute()
const shopName = route.query.shop || '未知商家'
const goToCheckout = () => {
  router.push({ name: 'OrderConfirm' })
}


// 模拟菜品数据
const dishes = ref([
  {
    name: '纯肉鲜肉（水饺）',
    description: '新鲜猪肉',
    price: 12,
    image: '/src/assets/img/sp01.png'
  },
  {
    name: '玉米鲜肉（水饺）',
    description: '玉米鲜肉',
    price: 10,
    image: '/src/assets/img/sp02.png'
  },
  {
    name: '虾仁三鲜（蒸饺）',
    description: '虾仁三鲜',
    price: 10,
    image: '/src/assets/img/sp03.png'
  },
  {
    name: '素三鲜（蒸饺）',
    description: '素三鲜',
    price: 10,
    image: '/src/assets/img/sp04.png'
  },
  {
    name: '角瓜鸡蛋（蒸饺）',
    description: '角瓜鸡蛋',
    price: 10,
    image: '/src/assets/img/sp05.png'
  },
  {
    name: '小白菜肉（水饺）',
    description: '小白菜肉',
    price: 10,
    image: '/src/assets/img/sp06.png'
  },
  {
    name: '芹菜牛肉（水饺）',
    description: '芹菜牛肉',
    price: 9,
    image: '/src/assets/img/sp07.png'
  }
])
</script>

<style scoped>
.dishes-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}

.dish-list {
  padding: 0 8px;
}

.dish-item {
  display: flex;
  background: white;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.dish-image {
  margin-right: 12px;
}

.dish-image img {
  width: 70px;
  height: 70px;
  border-radius: 6px;
  object-fit: cover;
}

.dish-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dish-info h3 {
  font-size: 16px;
  margin-bottom: 4px;
  color: #333;
}

.desc {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #e53935;
  font-weight: bold;
}
</style>
