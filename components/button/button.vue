<script setup lang="ts">
import { computed, inject } from 'vue'
import { BUTTON_GROUP_CONTEXT } from './button-group.vue'

export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'

export interface ButtonProps {
  active?: boolean
  color?: ButtonColor
  disabled?: boolean
  ghost?: boolean
  loading?: boolean
  square?: boolean
  outlined?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  active: false,
  disabled: undefined,
  ghost: undefined,
  loading: undefined,
  square: undefined,
  outlined: undefined,
  rounded: undefined,
})

const group = inject(BUTTON_GROUP_CONTEXT, {})

const color = computed(() => props.color ?? group.color)
const disabled = computed(() => props.disabled ?? group.disabled ?? false)
const ghost = computed(() => props.ghost ?? group.ghost ?? false)
const outlined = computed(() => props.outlined ?? group.outlined ?? false)
const square = computed(() => props.square ?? group.square ?? false)
const rounded = computed(() => props.rounded ?? group.rounded ?? false)
</script>

<template>
  <button
    :disabled="disabled" class="x-button" :class="[
      active && 'x-button-active',
      color && `x-button-${color}`,
      disabled && 'x-button-disabled',
      loading && 'x-button-loading',
      outlined && 'x-button-outlined',
      square && 'x-button-square',
      rounded && 'x-button-rounded',
      ghost && 'x-button-ghost',
    ]"
  >
    <slot />
  </button>
</template>

<style>
@import url('./button.css');
</style>
