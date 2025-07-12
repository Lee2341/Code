<template>
  <div class="order-page">
    <!-- 导航栏 -->
    <van-nav-bar title="订单" :style="{ backgroundColor: '#0097FF', color: 'white' }" />
    
    <!-- 订单标签页 -->
    <van-tabs v-model:active="activeTab" class="order-tabs">
      <van-tab title="全部" name="all">
        <div class="order-list">
          <div class="order-item" v-for="order in allOrders" :key="order.id">
            <div class="order-header">
              <span class="business-name">{{ order.businessName }}</span>
              <span class="order-status" :class="order.statusClass">{{ order.status }}</span>
            </div>
            <div class="order-content">
              <img :src="order.image" :alt="order.title" class="order-image" />
              <div class="order-info">
                <h4>{{ order.title }}</h4>
                <p>{{ order.description }}</p>
                <div class="order-meta">
                  <span class="order-time">{{ order.orderTime }}</span>
                  <span class="delivery-time">{{ order.deliveryTime }}</span>
                </div>
                <div class="order-price">￥{{ order.price }}</div>
              </div>
            </div>
            <div class="order-actions">
              <van-button size="small" type="default">查看详情</van-button>
              <van-button size="small" type="primary" v-if="order.canPay">立即支付</van-button>
              <van-button size="small" type="default" v-if="order.status === '配送中'">查看物流</van-button>
            </div>
          </div>
        </div>
      </van-tab>
      
      <van-tab title="待付款" name="pending">
        <div class="order-list">
          <div v-if="pendingOrders.length > 0">
            <div class="order-item" v-for="order in pendingOrders" :key="order.id">
              <div class="order-header">
                <span class="business-name">{{ order.businessName }}</span>
                <span class="order-status" :class="order.statusClass">{{ order.status }}</span>
              </div>
              <div class="order-content">
                <img :src="order.image" :alt="order.title" class="order-image" />
                <div class="order-info">
                  <h4>{{ order.title }}</h4>
                  <p>{{ order.description }}</p>
                  <div class="order-meta">
                    <span class="order-time">{{ order.orderTime }}</span>
                    <span class="delivery-time">{{ order.deliveryTime }}</span>
                  </div>
                  <div class="order-price">￥{{ order.price }}</div>
                </div>
              </div>
              <div class="order-actions">
                <van-button size="small" type="default">取消订单</van-button>
                <van-button size="small" type="primary">立即支付</van-button>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">
            <van-icon name="orders-o" size="60" color="#ddd" />
            <p>暂无待付款订单</p>
          </div>
        </div>
      </van-tab>
      
      <van-tab title="待发货" name="processing">
        <div class="order-list">
          <div v-if="processingOrders.length > 0">
            <div class="order-item" v-for="order in processingOrders" :key="order.id">
              <div class="order-header">
                <span class="business-name">{{ order.businessName }}</span>
                <span class="order-status" :class="order.statusClass">{{ order.status }}</span>
              </div>
              <div class="order-content">
                <img :src="order.image" :alt="order.title" class="order-image" />
                <div class="order-info">
                  <h4>{{ order.title }}</h4>
                  <p>{{ order.description }}</p>
                  <div class="order-meta">
                    <span class="order-time">{{ order.orderTime }}</span>
                    <span class="delivery-time">{{ order.deliveryTime }}</span>
                  </div>
                  <div class="order-price">￥{{ order.price }}</div>
                </div>
              </div>
              <div class="order-actions">
                <van-button size="small" type="default">联系商家</van-button>
                <van-button size="small" type="default" v-if="order.status === '配送中'">查看物流</van-button>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">
            <van-icon name="send-gift-o" size="60" color="#ddd" />
            <p>暂无待发货订单</p>
          </div>
        </div>
      </van-tab>
      
      <van-tab title="已完成" name="completed">
        <div class="order-list">
          <div v-if="completedOrders.length > 0">
            <div class="order-item" v-for="order in completedOrders" :key="order.id">
              <div class="order-header">
                <span class="business-name">{{ order.businessName }}</span>
                <span class="order-status" :class="order.statusClass">{{ order.status }}</span>
              </div>
              <div class="order-content">
                <img :src="order.image" :alt="order.title" class="order-image" />
                <div class="order-info">
                  <h4>{{ order.title }}</h4>
                  <p>{{ order.description }}</p>
                  <div class="order-meta">
                    <span class="order-time">{{ order.orderTime }}</span>
                    <span class="delivery-time">{{ order.deliveryTime }}</span>
                  </div>
                  <div class="order-price">￥{{ order.price }}</div>
                </div>
              </div>
              <div class="order-actions">
                <van-button size="small" type="default">再来一单</van-button>
                <van-button size="small" type="default">评价</van-button>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">
            <van-icon name="success" size="60" color="#ddd" />
            <p>暂无已完成订单</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('all')

// 订单数据
const allOrders = ref([
  {
    id: 1,
    orderNumber: '202401210001',
    status: '已完成',
    statusClass: 'completed',
    businessName: '万家饺子（软件园E18店）',
    title: '招牌饺子套餐',
    description: '白菜猪肉饺子×20个 + 酸辣汤',
    price: '45.00',
    image: '/src/assets/img/sj01.png',
    canPay: false,
    orderTime: '2024-01-21 12:30',
    deliveryTime: '13:15送达'
  },
  {
    id: 2,
    orderNumber: '202401210002',
    status: '待付款',
    statusClass: 'pending',
    businessName: '小锅饭豆腐馆（全运店）',
    title: '麻婆豆腐套餐',
    description: '麻婆豆腐 + 米饭 + 紫菜蛋花汤',
    price: '32.00',
    image: '/src/assets/img/sj02.png',
    canPay: true,
    orderTime: '2024-01-21 18:20',
    deliveryTime: '预计19:05送达'
  },
  {
    id: 3,
    orderNumber: '202401210003',
    status: '待发货',
    statusClass: 'processing',
    businessName: '麦当劳麦乐送（全运路店）',
    title: '巨无霸套餐',
    description: '巨无霸汉堡 + 薯条(大) + 可乐(中)',
    price: '38.50',
    image: '/src/assets/img/sj03.png',
    canPay: false,
    orderTime: '2024-01-21 19:45',
    deliveryTime: '预计20:30送达'
  },
  {
    id: 4,
    orderNumber: '202401210004',
    status: '配送中',
    statusClass: 'delivering',
    businessName: '米村拌饭（浑南店）',
    title: '石锅拌饭',
    description: '韩式石锅拌饭 + 韩式泡菜 + 海带汤',
    price: '28.80',
    image: '/src/assets/img/sj04.png',
    canPay: false,
    orderTime: '2024-01-21 20:10',
    deliveryTime: '预计20:45送达'
  },
  {
    id: 5,
    orderNumber: '202401210005',
    status: '已取消',
    statusClass: 'cancelled',
    businessName: '申记串道（中海康城店）',
    title: '烤串拼盘',
    description: '羊肉串×5 + 鸡翅×3 + 烤茄子',
    price: '52.00',
    image: '/src/assets/img/sj05.png',
    canPay: false,
    orderTime: '2024-01-20 21:30',
    deliveryTime: '已取消'
  }
])

// 按状态分类的订单
const pendingOrders = computed(() => allOrders.value.filter(order => order.status === '待付款'))
const processingOrders = computed(() => allOrders.value.filter(order => order.status === '待发货' || order.status === '配送中'))
const completedOrders = computed(() => allOrders.value.filter(order => order.status === '已完成'))
</script>

<style scoped>
.order-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.order-tabs {
  background: white;
}

.order-list {
  padding: 10px;
}

.order-item {
  background: white;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.business-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.order-status {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
}

.order-status.completed {
  background: #f0f9ff;
  color: #0097FF;
}

.order-status.pending {
  background: #fff7ed;
  color: #f59e0b;
}

.order-status.processing {
  background: #f0f9ff;
  color: #3b82f6;
}

.order-status.delivering {
  background: #f0fdf4;
  color: #22c55e;
}

.order-status.cancelled {
  background: #fef2f2;
  color: #ef4444;
}

.order-content {
  display: flex;
  margin-bottom: 15px;
}

.order-image {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  margin-right: 12px;
  object-fit: cover;
}

.order-info {
  flex: 1;
}

.order-info h4 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #333;
}

.order-info p {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #666;
}

.order-meta {
  margin: 8px 0;
  font-size: 12px;
  color: #999;
}

.order-time {
  margin-right: 16px;
}

.delivery-time {
  color: #666;
}

.order-price {
  font-size: 16px;
  color: #ff6b6b;
  font-weight: bold;
  margin-top: 8px;
}

.order-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-state p {
  margin-top: 20px;
  color: #999;
  font-size: 14px;
}

/* 导航栏样式 */
:deep(.van-nav-bar__title) {
  color: white !important;
}
</style> 