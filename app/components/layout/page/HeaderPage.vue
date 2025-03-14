<template>
  <div class="header-page">
    <span class="header-page__ad-title">Annoncé</span>
    <v-btn class="header-page__btn-category btn-category" variant="flat" color="secondary" rounded>
      <template #prepend>
        <TIcon name="app" width="24" height="24" />
      </template>
      <span class="btn-category__text">Все категории</span>
    </v-btn>
    <v-spacer class="btn-category__spacer" />
    <span class="header-page__location">
      <TIcon name="location" width="16" height="16" />
      <span class="header-page__location-text">Ростов-На-Дону</span>
    </span>
    <span class="header-page__divide" />
    <v-btn class="header-page__btn-new-ad primary-text" variant="text">Разместить объявление</v-btn>
    <v-btn
      :class="['header-page__btn-menu', 'btn-menu', viewport.isLessThan('desktop') ? 'mobile-menu' : 'desktop-menu']"
      variant="text"
      rounded
    >
      <template #prepend>
        <TIcon class="btn-menu__icon" name="menu" width="24" height="24" />
      </template>
      <template #append>
        <v-img :width="40" aspect-ratio="1" cover class="btn-menu__avatar" src="~/assets/img/avatar.jpg" alt="Аватар" />
      </template>
    </v-btn>
    <div v-if="viewport.isLessThan('desktop')" class="header-page__btn-cart">
      <v-btn variant="text">
        <TIcon class="btn-menu__icon" name="cart" width="24" height="24" />
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const viewport = useViewport()
</script>

<style scoped>
.header-page {
  display: flex;
  padding-block: 0.5rem;

  & .header-page__ad-title {
    font-family: "Noto Serif";
    font-size: 1.75rem;
    font-weight: 600;

    @media (max-width: 959px) {
      order: 3;
    }
  }

  .header-page__btn-category {
    margin-left: 2.3125rem;
    padding: 0.75rem 1rem;
  }

  & .btn-category {
    & .btn-category__text {
      margin-left: 0.25rem;
    }
  }

  .btn-category__spacer {
    @media (max-width: 959px) {
      order: 2;
    }
  }

  .btn-menu.desktop-menu {
    background-color: var(--color-grey);
    height: 100%;
    padding: 0.25rem;

    .btn-menu__icon {
      margin-left: 0.5rem;
    }

    .btn-menu__avatar {
      border-radius: 50%;
      margin-left: 0.5rem;
    }
  }

  .btn-menu.mobile-menu {
    order: 1;
    margin-left: -0.625rem;

    .btn-menu__avatar {
      display: none;
    }
  }

  .header-page__location {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .header-page__divide {
    border-right: 1px solid #cccccc;
    margin-inline: 1.5rem;
  }

  .header-page__btn-new-ad {
    margin-right: 1.5rem;

    @media (max-width: 959px) {
      display: none;
    }
  }

  .header-page__btn-cart {
    position: relative;
    margin-left: 2.25rem;
    order: 4;

    > .v-btn {
      padding: 0.5rem;
    }
  }

  @media (max-width: 959px) {
    .header-page__location,
    .header-page__divide {
      display: none;
    }
  }

  @media (max-width: 959px) {
    .header-page__btn-category {
      display: none;
    }
  }
}
</style>
