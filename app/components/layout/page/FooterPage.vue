<template>
  <div class="footer-page">
    <ul class="footer-page__list">
      <li class="footer-page__item footer-page__item--black">&copy; Annonce {{ year }}</li>
      <li class="footer-page__item">Документы</li>
      <li class="footer-page__item">О компании</li>
      <template v-if="viewport.isLessThan('desktop')">
        <li class="footer-page__item">Продавцам</li>
        <li class="footer-page__item">Покупателям</li>
        <li class="footer-page__item">Разместить объявление</li>
        <li class="footer-page__item">
          <img class="footer-page__lang-img" src="~/assets/img/rus.png" alt="Русский" />
          <span class="footer-page__lang">Русский</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const viewport = useViewport()
</script>

<style scoped>
.footer-page {
  .footer-page__list {
    display: flex;
    gap: 1.25rem;
    height: 5.5rem;
    padding-block: 1.5rem;

    @media (max-width: 959px) {
      flex-direction: column;
      padding-block: 1.5rem 2.5rem;
      height: auto;
    }

    & .footer-page__item {
      color: var(--color-third-text);

      &.footer-page__item--black {
        color: var(--color-primary-text);
      }

      .footer-page__lang-img {
        border-radius: 50%;
      }

      .footer-page__lang {
        margin-left: 0.375rem;
      }
    }
  }
}
</style>
