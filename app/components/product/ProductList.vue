<template>
  <div class="product-list">
    <div class="product-list__filter">
      <v-btn variant="flat" color="secondary"> Все товары и услуги </v-btn>
    </div>
    <div class="product-list__items">
      <template v-for="product of products" :key="product.id">
        <ProductCard :product="product" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "~/types/product"

defineProps({
  products: {
    type: Array as PropType<IProduct[]>,
    required: true,
  },
})
</script>

<style scoped>
.product-list {
  .product-list__filter {
    margin-block: 1.5625rem 1.5rem;
    text-align: center;
  }

  .product-list__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;

    @media (max-width: 1296px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 959px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
