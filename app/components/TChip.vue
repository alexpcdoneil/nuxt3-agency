<template>
  <span class="t-chip">
    <slot name="prepend" />
    <slot></slot>
  </span>
</template>

<script setup lang="ts"></script>

<style scoped>
.t-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 4px 8px;
  font-size: 0.8125rem;
  color: var(--color-white);
  background-color: #1b1d22;
  opacity: 0.6;
  border-radius: var(--rounded-sm);
}
</style>
