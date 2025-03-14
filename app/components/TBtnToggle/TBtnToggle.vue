<template>
  <div class="t-button-toggle hidden-scroll">
    <template v-for="(item, i) of items" :key="i">
      <v-btn
        :class="['t-button-toggle__btn', { 't-button-toggle__btn--selected': item.value === model }]"
        variant="flat"
        color="secondary"
        @click="setValue(item.value)"
      >
        <span>{{ item.text }}</span>
        <span v-if="item.appendText" class="t-button-toggle__append-text">{{ item.appendText }}</span>
      </v-btn>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import type { BtnToggleItem } from "~/components/TBtnToggle/types"

defineProps({
  modelValue: {},
  items: {
    type: Array as PropType<BtnToggleItem[]>,
    default: () => [],
  },
})

const model = defineModel()

const setValue = (value: unknown) => {
  if (model !== value) {
    model.value = value
  }
}
</script>

<style scoped>
.t-button-toggle {
  display: flex;
  gap: 0.5rem;

  @media (max-width: 959px) {
    overflow-x: auto;
    white-space: nowrap;
    margin-inline: calc(-1 * var(--px-mobile-container));
  }

  .t-button-toggle__append-text {
    margin-left: 0.25rem;
    color: var(--color-third-text);
  }

  .t-button-toggle__btn:first-of-type {
    margin-left: var(--px-mobile-container);
  }

  .t-button-toggle__btn--selected {
    border: 1px solid var(--color-black);
  }
}
</style>
