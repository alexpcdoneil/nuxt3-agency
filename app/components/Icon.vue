<template>
  <svg class="icon" :width="iconWidth" :height="iconHeight">
    <use :xlink:href="iconUrl" />
  </svg>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue"
import spriteUrl from "@/assets/img/sprite.svg?url"

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: 24,
  },
  height: {
    type: [String, Number],
    default: 24,
  },
})

const { width: iconWidth, height: iconHeight, name: iconName } = toRefs(props)

const iconUrl = computed(() => `${spriteUrl}#${iconName.value}`)
</script>

<style>
.icon {
  display: inline-block;
  max-width: 3.5rem;
  max-height: 3.5rem;
}
</style>
