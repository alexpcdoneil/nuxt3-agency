<template>
  <div class="page-main">
    <CompanyInfo v-if="!viewport.isLessThan('desktop')" :company="companyInfo" />
    <TBtnToggle class="page-main__toggle-btns" v-model="category" :items="categories" />
    <div class="page-main__sections">
      <template v-if="category && sections[category] && !loading">
        <component :is="sections[category].view" v-bind="sections?.[category]?.attrs ?? {}" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "~/types/product"
import type { BtnToggleItem } from "~/components/TBtnToggle/types"
import type { ICompany } from "~/types/company"

definePageMeta({
  layout: "page",
  middleware: ["auth"],
})

const apiFetch = inject("apiFetch")

const products = ref<IProduct[]>([])
const loading = ref(true)

apiFetch("/api/product/list").then((data: IProduct[]) => {
  try {
    loading.value = true
    sections.products.attrs.products = data
  } finally {
    loading.value = false
  }
})

const viewport = useViewport()

const category = ref("products")

const categories: BtnToggleItem[] = [
  { text: "Товары и услуги", value: "products" },
  { text: "Агенты", appendText: "5", value: "agents" },
  { text: "О компании", value: "company" },
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
    attrs: { products: products.value },
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
