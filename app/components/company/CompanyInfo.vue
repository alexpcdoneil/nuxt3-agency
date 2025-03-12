<template>
  <div class="company-info">
    <div class="company-info__logo">
      <img class="company-logo" src="public/logo.jpg" alt="Логотип компании" />
    </div>
    <div class="company-info__description">
      <p class="company-info__title">
        <b>{{ companyInfo.title }}</b>
      </p>
      <p class="company-info__subtitle">
        <Icon name="premium" width="16" height="16" class="company-info__icon" /> Документы проверены •
        <Icon class="company-info__icon" width="16" height="16" name="star" /> {{ companyInfo.rating }} •
        {{ companyInfo.count_reviews }} отзывов
      </p>
    </div>
    <v-btn>Показать номер телефона</v-btn>
  </div>
</template>

<script setup lang="ts">
const companyInfo = {
  logo_src: "../../../public/logo.jpg",
  title: "Наследие",
  phone: "+13456789",
  verified: true,
  rating: 4.7,
  count_reviews: 19,
}
</script>

<style scoped>
.company-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  .company-info__logo {
    display: inline-flex;

    img {
      border-radius: 1.1875rem;
    }
  }

  .company-info__description {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .company-info__title {
      font-size: 1.5rem;
      line-height: 1.75;
    }

    .company-info__subtitle {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      font-size: 0.9375rem;
      line-height: 1.25;

      .company-info__icon {
        color: var(--color-primary);
      }
    }
  }
}
</style>
