<template>
  <div class="home-page">
    <!-- 顶部位置信息和搜索框 -->
    <van-sticky :offset-top="0">
      <div class="header-sticky">
        <!-- 顶部位置信息 -->
        <div class="header-location">
          <div class="location-info">
            <van-icon name="location-o" color="white" size="18" />
            <span class="location-text">沈阳市规划大厦</span>
            <van-icon name="arrow-down" color="white" size="14" />
          </div>
        </div>

        <!-- 搜索框 -->
        <div class="search-section">
          <van-search
              v-model="searchValue"
              placeholder="搜索饿了么商家、商品名称"
              shape="round"
              background="transparent"
              :show-action="false"
          />
        </div>
      </div>
    </van-sticky>

    <!-- 点餐分类 -->
    <div class="food-category">
      <van-grid :column-num="5" :border="false" :gutter="10">
        <van-grid-item
            v-for="(category, index) in foodCategories"
            :key="index"
            @click="handleCategoryClick(category)"
        >
          <img :src="category.image" :alt="category.name" class="category-image" />
          <span class="category-name">{{ category.name }}</span>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 品质套餐横幅 -->
    <div class="banner-section">
      <div class="banner-content">
        <div class="banner-text">
          <h3>品质套餐</h3>
          <p>搭配齐全吃得好</p>
          <span class="banner-action">立即抢购 ></span>
        </div>
      </div>
    </div>

    <!-- 超级会员 -->
    <div class="super-member">
      <div class="member-left">
        <img src="/src/assets/img/super_member.png" alt="超级会员" class="member-icon" />
        <div class="member-text">
          <h3>超级会员</h3>
          <p>• 每月享超值权益</p>
        </div>
      </div>
      <div class="member-right">
        <span>立即开通 ></span>
      </div>
    </div>

    <!-- 推荐商家标题 -->
    <div class="recommend-title">
      <div class="recommend-line"></div>
      <span>推荐商家</span>
      <div class="recommend-line"></div>
    </div>

    <!-- 推荐方式筛选 -->
    <div class="filter-section">
      <van-dropdown-menu>
        <van-dropdown-item v-model="sortType" :options="sortOptions" />
        <van-dropdown-item title="距离最近" />
        <van-dropdown-item title="销量最高" />
        <van-dropdown-item title="筛选" />
      </van-dropdown-menu>
    </div>

    <!-- 商家列表 -->
    <div class="business-list">
      <div
          v-for="(business, index) in businessList"
          :key="index"
          class="business-item"
          @click="handleBusinessClick(business)"
      >
        <div class="business-image">
          <img :src="business.image" :alt="business.name" />
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchValue = ref('')
const sortType = ref('综合排序')

const sortOptions = [
  { text: '综合排序', value: '综合排序' },
  { text: '距离最近', value: '距离最近' },
  { text: '销量最高', value: '销量最高' },
  { text: '好评优先', value: '好评优先' }
]

// 点餐分类数据
const foodCategories = ref([
  { name: '美食', image: '/src/assets/img/dcfl01.png' },
  { name: '早餐', image: '/src/assets/img/dcfl02.png' },
  { name: '跑腿代购', image: '/src/assets/img/dcfl03.png' },
  { name: '汉堡披萨', image: '/src/assets/img/dcfl04.png' },
  { name: '甜品饮品', image: '/src/assets/img/dcfl05.png' },
  { name: '速食简餐', image: '/src/assets/img/dcfl06.png' },
  { name: '地方小吃', image: '/src/assets/img/dcfl07.png' },
  { name: '米粉面馆', image: '/src/assets/img/dcfl08.png' },
  { name: '包子粥铺', image: '/src/assets/img/dcfl09.png' },
  { name: '炸鸡炸串', image: '/src/assets/img/dcfl10.png' }
])

// 商家列表数据
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

// 处理分类点击
const handleCategoryClick = (category) => {
  console.log('点击分类:', category.name)
  if (category.name === '美食') {
    router.push('/business-list')  // 你也可以传递参数，比如 query 或 path param
  }
}

// 处理商家点击
const handleBusinessClick = (business) => {
  console.log('点击商家:', business.name)
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background-color: #fff;
}

/* 顶部吸顶容器 */
.header-sticky {
  background: linear-gradient(135deg, #0097FF, #00a8ff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 顶部位置信息 */
.header-location {
  padding: 10px 16px;
  color: white;
}

.location-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.location-text {
  flex: 1;
  font-size: 16px;
  font-weight: 500;
}

/* 搜索框 */
.search-section {
  padding: 0 16px 16px;
}

:deep(.van-search) {
  padding: 0;
}

:deep(.van-search__content) {
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 吸顶时的样式 */
:deep(.van-sticky--fixed) .header-sticky {
  z-index: 99;
}

/* 点餐分类 */
.food-category {
  background: white;
  padding: 20px 16px;
  margin-bottom: 10px;
}

.category-image {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
}

.category-name {
  font-size: 12px;
  color: #333;
}

/* 品质套餐横幅 */
.banner-section {
  background-image: url('/src/assets/img/index_banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 16px 10px;
  border-radius: 8px;
  overflow: hidden;
  min-height: 120px;
}

.banner-content {
  display: flex;
  align-items: center;
  padding: 20px;
  height: 100%;
}

.banner-text {
  flex: 1;
  color: #333;
}

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

.banner-action {
  font-size: 14px;
  color: #FF6600;
  font-weight: 500;
}

/* 超级会员 */
.super-member {
  background-color: #FEEDC1;
  margin: 0 16px 10px;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.member-left {
  display: flex;
  align-items: center;
  color: #8B4513;
}

.crown-icon {
  font-size: 24px;
  margin-right: 12px;
}

.member-icon {
  width: 40px;
  height: 40px;
  margin-right: 12px;
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

.member-right {
  color: #8B4513;
  font-size: 14px;
}

/* 推荐商家标题 */
.recommend-title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px 10px;
  color: #666;
  font-size: 16px;
}

.recommend-line {
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 15px;
}

/* 筛选部分 */
.filter-section {
  background: white;
  margin-bottom: 10px;
}

:deep(.van-dropdown-menu) {
  box-shadow: none;
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