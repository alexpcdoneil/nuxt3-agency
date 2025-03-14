<template>
  <div class="company-info">
    <div class="company-info__logo">
      <v-img class="company-logo" :width="120" aspect-ratio="1" cover src="public/logo.jpg" alt="Логотип компании" />
    </div>
    <div class="company-info__description">
      <p class="company-info__title">
        <b>{{ company.title }}</b>
      </p>
      <p class="company-info__subtitle">
        <TIcon name="premium" width="16" height="16" class="company-info__icon" />
        <span>Документы проверены</span>
        <TIcon class="company-info__icon" width="16" height="16" name="star" />
        <span>{{ company.rating }}</span>
        <span>{{ company.count_reviews }} отзывов</span>
      </p>
    </div>
    <v-btn v-if="hidePhone" variant="flat" color="primary" size="large" @click="hidePhone = !hidePhone">Показать номер телефона</v-btn>
    <a v-else :href="`tel:${company.phone}`">
      <v-btn variant="flat" color="primary" size="large">{{ company.phone }}</v-btn>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import type { ICompany } from "~/types/company"

defineProps({
  company: {
    type: Object as PropType<ICompany>,
    required: true,
  },
})

const hidePhone = ref(true)
</script>

<style scoped>
.company-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  .company-logo {
    border-radius: var(--rounded);
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
      line-height: 1.25;
      white-space: nowrap;

      > :not(:first-child):not(:last-child) {
        &:after {
          content: "•";
          padding-inline: 0.25rem;
        }
      }

      > .icon {
        color: var(--color-primary);
        margin-right: 0.25rem;
      }
    }
  }
}
</style>
