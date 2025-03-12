<template>
  <div class="page">
    <header class="page__header">
      <div class="container">
        <HeaderPage />
      </div>
    </header>
    <main class="page__main">
      <div class="container">
        <slot />
      </div>
    </main>
    <footer class="page__footer">
      <div class="container">
        <FooterPage />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import FooterPage from "~/components/layout/page/FooterPage.vue"
import HeaderPage from "~/components/layout/page/HeaderPage.vue"
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100dvh;

  .page__header {
    background-color: #fff7eb;
  }

  .page__main {
    flex: 1 0 auto;
    padding-bottom: 4.5625rem;
  }

  .page__footer {
    border-top: 1px solid #dbdbdb;
    background-color: #f5f5f5;
  }
}
</style>
