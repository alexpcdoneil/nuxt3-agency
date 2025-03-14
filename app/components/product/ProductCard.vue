<template>
  <div class="product-card">
    <section class="product-card__body">
      <v-img aspect-ratio="414/322" cover src="public/Img.png" :alt="product?.name" class="product-card__image" />
      <div v-if="product!.status !== ProductStatus.hidden" class="product-card__labels">
        <TChip>
          <template #prepend>
            <TIcon name="eye" />
          </template>
          <span>{{ product.watched }}</span>
        </TChip>
        <TChip>
          <template #prepend>
            <TIcon name="calendar" />
          </template>
          <span>{{ product.created }}</span>
        </TChip>
      </div>
      <div class="product-card__description">
        <p class="product-card__price">{{ formatCurrency(product!.price) }}</p>
        <h4 class="product-card__name">{{ product!.name }}</h4>
      </div>
    </section>
    <footer class="product-card__footer">
      <template v-if="product!.status === ProductStatus.promoted">
        <p class="product-card__promoted-status-text status-text">Объявление продвигается</p>
      </template>
      <template v-else-if="product!.status === ProductStatus.promote">
        <div class="product-card__promote-status">
          <div class="product-card__promote-status-text status-text">Увеличьте количество просмотров</div>
          <v-btn variant="flat" color="primary" class="product-card__promote-btn">Продвигать</v-btn>
        </div>
      </template>
      <template v-else-if="product!.status === ProductStatus.hidden">
        <p class="product-card__hidden-status-text status-text">Объявление скрыто</p>
      </template>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { type IProduct, ProductStatus } from "~/types/product"
import { formatCurrency } from "~/libs/product"

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  .product-card__body {
    position: relative;

    .product-card__image {
      max-width: 25.875rem;
      aspect-ratio: 414 / 322;
      object-fit: cover;
      border-radius: var(--rounded-md);

      @media (max-width: 959px) {
        margin: 0 auto;
      }

      @media (max-width: 478px) {
        margin: 0;
        max-width: 100%;
      }
    }

    .product-card__labels {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;

      > *:not(:first-child) {
        margin-inline-start: 0.25rem;
      }
    }

    .product-card__description {
      padding-block: 1rem 0.5625rem;

      .product-card__price {
        font-size: 1.0625rem;
        font-weight: 500;
      }

      .product-card__name {
        font-size: 0.8125rem;
        font-weight: 500;
        margin-top: 0.75rem;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .product-card__footer {
    display: flex;
    height: 100%;
    border-top: 1px solid var(--color-grey);
    padding-inline: 0.25rem;
    padding-block: 0.75rem 0.25rem;

    .status-text {
      line-height: 1.125rem;
    }

    .product-card__promoted-status-text,
    .product-card__hidden-status-text {
      align-self: center;
      margin: 0 auto;
    }

    .product-card__promote-status {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      gap: 0.75rem;

      .product-card__promote-status-text {
        font-size: 0.8125rem;
        font-weight: 400;
        color: var(--color-third-text);
      }
    }

    .product-card__promoted-status-text {
      color: var(--color-primary);
    }

    .product-card__hidden-status-text {
      text-align: center;
      color: var(--color-red);
    }
  }
}
</style>
