<template>
  <div class="products">
    <CompanyInfo />
    <ProductList :products="products" />
  </div>
</template>

<script setup lang="ts">
import { type IProduct, ProductStatus } from "~/types/product"

definePageMeta({
  layout: "page",
})

const products: IProduct[] = [
  {
    id: 1,
    name: "Сlavia Nord Grand сценическое цифровое пианино",
    price: 450500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promoted,
  },
  {
    id: 2,
    name: "Hyundai Sonata 2.0 AT, 2023, 30 км",
    price: 3285000,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
  },
  { id: 3, name: "2-к. квартира, 46 м², 1/5 эт.", price: 3285000, image: "../../../public/logo.jpg", status: ProductStatus.promote },
  { id: 4, name: "Старые барабаны", price: 7500, image: "../../../public/logo.jpg", status: ProductStatus.promote },
  {
    id: 5,
    name: "DMX сплиттер RJ45 to 4x XLR Stairville",
    price: 7500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
  },
  { id: 6, name: "Мотоцикл honda", price: 217500, image: "../../../public/logo.jpg", status: ProductStatus.promote },
  { id: 7, name: "Иж юпитер 5", price: 17900, image: "../../../public/logo.jpg", status: ProductStatus.promote },
  {
    id: 7,
    name: "Пылесос кёрхер с водяным мешком для сбора пыли",
    price: 7500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.hidden,
  },
]
</script>

<style module></style>
