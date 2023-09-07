<script setup lang="ts">
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'

export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  rounded?: boolean
  outlined?: boolean
  color?: ButtonColor
}

withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  loading: false,
  outlined: false,
})
</script>

<template>
  <button
    :disabled="disabled" class="x-button" :class="[
      color && `x-button-${color}`,
      disabled && 'x-button-disabled',
      loading && 'x-button-loading',
      outlined && 'x-button-outlined',
      rounded && 'x-button-rounded',
    ]"
  >
    <slot />
  </button>
</template>

<style>
@import url('./button.css');
</style>
