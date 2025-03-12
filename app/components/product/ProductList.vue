<template>
  <div class="product-list">
    <template v-for="product of products" :key="product.id">
      <ProductCard :product="product" />
    </template>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;

  @media (max-width: 1296px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}
</style>
