<template>
  <div class="about-page">
    <!-- 导航栏 -->
    <van-nav-bar
        title="关于我们"
        left-arrow
        @click-left="$router.back()"
    />

    <!-- 内容部分 -->
    <div class="content">
      <section class="info-section">
        <h2>公司简介</h2>
        <p>
          本平台致力于为广大用户提供高效、便捷的点餐服务，整合各类优质餐饮资源，打造“美食触手可及”的用户体验。
        </p>
      </section>

      <section class="feature-section">
        <h3>我们的理念</h3>
        <p>
          我们坚持“用户第一，服务至上”的原则，以技术推动便民生活，致力于成为本地生活服务的领先平台。
        </p>
      </section>

      <section class="feature-section">
        <h3>我们的团队</h3>
        <p>
          我们是一支富有创新精神的年轻团队，专注于互联网与生活服务的融合开发，持续优化产品和用户体验。
        </p>
      </section>

      <section class="contact-section">
        <h3 class="contact-title">联系方式</h3>
        <ul>
          <li>客服邮箱：support@meishiapp.com</li>
          <li>客服电话：400-123-4567</li>
          <li>公司地址：上海市浦东新区科技园1号楼</li>
        </ul>
      </section>
    </div>
  </div>
</template>
