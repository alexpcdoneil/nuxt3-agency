<template>
  <div class="page-main">
    <CompanyInfo v-if="!viewport.isLessThan('desktop')" :company="companyInfo" />
    <TBtnToggle class="page-main__toggle-btns" v-model="category" :items="categories" />
    <div class="page-main__sections">
      <template v-if="category && sections[category]">
        <component :is="sections[category].view" v-bind="sections?.[category]?.attrs ?? {}" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct, ProductStatus } from "~/types/product"
import type { BtnToggleItem } from "~/components/TBtnToggle/types"
import type { ICompany } from "~/types/company"

definePageMeta({
  layout: "page",
})

const viewport = useViewport()

const category = ref("products")

const categories: BtnToggleItem[] = [
  { text: "Товары и услуги", value: "products" },
  { text: "Агенты", appendText: "5", value: "agents" },
  { text: "О компании", value: "company" },
]

const products: IProduct[] = [
  {
    id: 1,
    name: "Сlavia Nord Grand сценическое цифровое пианино",
    price: 450500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promoted,
    watched: 750,
    created: "2 дня",
  },
  {
    id: 2,
    name: "Hyundai Sonata 2.0 AT, 2023, 30 км",
    price: 3285000,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
    watched: 750,
    created: "2 дня",
  },
  {
    id: 3,
    name: "2-к. квартира, 46 м², 1/5 эт.",
    price: 3285000,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
    watched: 750,
    created: "2 дня",
  },
  {
    id: 4,
    name: "Старые барабаны",
    price: 7500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
    watched: 750,
    created: "2 дня",
  },
  {
    id: 5,
    name: "DMX сплиттер RJ45 to 4x XLR Stairville",
    price: 7500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
    watched: 750,
    created: "2 дня",
  },
  {
    id: 6,
    name: "Мотоцикл honda",
    price: 217500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
    watched: 750,
    created: "2 дня",
  },
  {
    id: 7,
    name: "Иж юпитер 5",
    price: 17900,
    image: "../../../public/logo.jpg",
    status: ProductStatus.promote,
    watched: 750,
    created: "2 дня",
  },
  {
    id: 7,
    name: "Пылесос кёрхер с водяным мешком для сбора пыли",
    price: 7500,
    image: "../../../public/logo.jpg",
    status: ProductStatus.hidden,
    watched: 750,
    created: "2 дня",
  },
]

const companyInfo: ICompany = {
  logo_src: "../../../public/logo.jpg",
  title: "Наследие",
  phone: "+13456789",
  verified: true,
  rating: 4.7,
  count_reviews: 19,
}

const sections = {
  products: {
    view: defineAsyncComponent(() => import("~/components/product/ProductList.vue")),
    attrs: { products },
  },
}
</script>

<style scoped>
.page-main {
  display: flex;
  flex-direction: column;

  .page-main__toggle-btns {
    justify-content: center;
    margin-block: 2rem;

    @media (max-width: 959px) {
      margin-block: 0.5rem;
      justify-content: start;
    }
  }

  .page-main__sections {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: -2rem;
      border: 1px solid #cccccc;
      width: 100vw;
    }
  }
}
</style>
