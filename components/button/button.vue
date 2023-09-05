<script setup lang="ts">
import { pp } from './config'

defineProps(pp)
</script>

<template>
  <button class="x-button" :class="`x-button--${size}`">
    <slot />
  </button>
</template>

<style>
.x-button {
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid #dcdfe6;
  background-image: none;
}
</style>
