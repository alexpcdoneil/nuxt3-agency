<template>
  <div class="header-page">
    <div class="header-page__left">
      <span class="header-page__ad-title">Annoncé</span>
      <span>Все категории</span>
    </div>
    <div class="header-page__right">
      <span><Icon name="location" width="16" height="16" /> Ростов-На-Дону</span>
      <span>Разместить объявление</span>
      <v-btn />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-page {
  display: flex;
  justify-content: space-between;

  & .header-page__left {
    display: flex;
    align-items: center;
    gap: 2.3125rem;

    & .header-page__ad-title {
      font-family: "Noto Serif";
      font-size: 1.75rem;
      font-weight: 600;
    }
  }

  & .header-page__right {
    display: flex;
    align-items: center;
    gap: 4.5rem;
  }
}
</style>
