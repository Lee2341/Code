<template>
  <!-- 商家列表 -->
  <div class="business-list-page p-4">
    <van-nav-bar
        title="商家列表"
        left-arrow
        @click-left="$router.back()"
    />

  <div class="business-list">
    <div
        v-for="(business, index) in businessList"
        :key="index"
        class="business-item"
    >
      <div class="business-image">
        <img
            :src="business.image"
            :alt="business.name"
            @click="business.name === '万家饺子（软件园E18店）' && goToDishes(business)"
            style="cursor: pointer"
        />
        <div class="delivery-tag" v-if="business.isNew">新</div>
      </div>

      <div class="business-info">
        <div class="business-header">
          <h3>{{ business.name }}</h3>
          <van-icon name="bookmark-o" color="#ddd" size="16" />
        </div>

        <div class="business-rating">
          <div class="rating-left">
            <div class="stars">
              <van-icon v-for="star in 5" :key="star" name="star" color="#ffd21e" size="12" />
            </div>
            <span class="rating-text">{{ business.rating }} 月售{{ business.monthlySales }}单</span>
          </div>
          <div class="delivery-type">蜂鸟专送</div>
        </div>

        <div class="business-delivery">
          <span>¥{{ business.minPrice }}起送 | ¥{{ business.deliveryFee }}配送</span>
          <span>{{ business.distance }}km | {{ business.time }}分钟</span>
        </div>

        <div class="business-category">
          <span>{{ business.category }}</span>
        </div>

        <div class="business-promotions">
          <div class="promotion-item" v-for="(promotion, pIndex) in business.promotions" :key="pIndex">
            <div class="promotion-left">
              <span class="promotion-tag" :style="{ backgroundColor: promotion.color }">{{ promotion.tag }}</span>
              <span class="promotion-text">{{ promotion.text }}</span>
            </div>
            <div class="promotion-right" v-if="pIndex === 0 && business.promotions.length > 1">
              <span>{{ business.promotions.length }}个活动</span>
              <van-icon name="arrow-down" size="12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router'
import {computed, ref} from 'vue'

const route = useRoute()
const router = useRouter()

const goToDishes = (business) => {
  console.log('跳转到菜品页面:', business.name)
  router.push({ name: 'Dishes', query: { shop: business.name } })
}

const businessList = ref([
  {
    name: '万家饺子（软件园E18店）',
    image: '/src/assets/img/sj01.png',
    rating: 4.9,
    monthlySales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: 3.22,
    time: 30,
    category: '各种饺子',
    isNew: true,
    promotions: [
      { tag: '新', color: '#4CAF50', text: '饿了么新用户首单立减9元' },
      { tag: '特', color: '#F1884F', text: '特价商品5元起' }
    ]
  },
  {
    name: '小锅饭豆腐馆（全运店）',
    image: '/src/assets/img/sj02.png',
    rating: 4.9,
    monthlySales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: 3.22,
    time: 30,
    category: '各种饺子',
    isNew: false,
    promotions: [
      { tag: '新', color: '#4CAF50', text: '饿了么新用户首单立减9元' },
      { tag: '特', color: '#F1884F', text: '特价商品5元起' }
    ]
  },
  {
    name: '麦当劳麦乐送（全运路店）',
    image: '/src/assets/img/sj03.png',
    rating: 4.9,
    monthlySales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: 3.22,
    time: 30,
    category: '各种饺子',
    isNew: false,
    promotions: [
      { tag: '新', color: '#4CAF50', text: '饿了么新用户首单立减9元' },
      { tag: '特', color: '#F1884F', text: '特价商品5元起' }
    ]
  },
  {
    name: '米村拌饭（浑南店）',
    image: '/src/assets/img/sj04.png',
    rating: 4.9,
    monthlySales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: 3.22,
    time: 30,
    category: '各种饺子',
    isNew: false,
    promotions: [
      { tag: '新', color: '#4CAF50', text: '饿了么新用户首单立减9元' },
      { tag: '特', color: '#F1884F', text: '特价商品5元起' }
    ]
  },
  {
    name: '申记串道（中海康城店）',
    image: '/src/assets/img/sj05.png',
    rating: 4.9,
    monthlySales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: 3.22,
    time: 30,
    category: '各种饺子',
    isNew: false,
    promotions: [
      { tag: '新', color: '#4CAF50', text: '饿了么新用户首单立减9元' },
      { tag: '特', color: '#F1884F', text: '特价商品5元起' }
    ]
  }
])

</script>

<style scoped>
.business-list-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}
</style>
const handleBusinessClick = (business) => {
console.log('点击商家:', business.name)
}

<style scoped>

.banner-text h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px;
  color: #333;
}

.banner-text p {
  font-size: 14px;
  margin: 0 0 12px;
  color: #666;
}

.member-text h3 {
  font-size: 16px;
  margin: 0 0 2px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.member-text p {
  font-size: 12px;
  margin: 0;
  opacity: 0.9;
}

/* 商家列表 */
.business-list {
  padding: 0 16px;
}

.business-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.business-image {
  position: relative;
  margin-right: 12px;
}

.business-image img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
}

.delivery-tag {
  position: absolute;
  top: -5px;
  left: -5px;
  background: #4CAF50;
  color: white;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 2px;
}

.business-info {
  flex: 1;
}

.business-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.business-header h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.business-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.rating-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  display: flex;
  gap: 2px;
}

.rating-text {
  font-size: 12px;
  color: #666;
}

.delivery-type {
  font-size: 10px;
  background: #0097FF;
  color: white;
  padding: 2px 6px;
  border-radius: 2px;
}

.business-delivery {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.business-category {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
}

.business-promotions .promotion-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
}

.promotion-left {
  display: flex;
  align-items: center;
  gap: 5px;
}

.promotion-tag {
  font-size: 10px;
  color: white;
  padding: 2px 4px;
  border-radius: 2px;
}

.promotion-text {
  font-size: 11px;
  color: #666;
}

.promotion-right {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: #999;
}
</style>