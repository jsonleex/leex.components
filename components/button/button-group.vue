<script lang="ts">
import { type InjectionKey, provide } from 'vue'
import { type ButtonProps } from './button.vue'

export const BUTTON_GROUP_CONTEXT = Symbol('BUTTON_GROUP_CONTEXT') as InjectionKey<ButtonGroupProps>
</script>

<script setup lang="ts">
export type ButtonGroupProps = Pick<
  ButtonProps,
  | 'color'
  | 'disabled'
  | 'outlined'
  | 'rounded'
  | 'square'
  | 'ghost'
>

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  disabled: undefined,
  outlined: undefined,
  rounded: undefined,
  square: undefined,
  ghost: undefined,
})

provide<ButtonGroupProps>(BUTTON_GROUP_CONTEXT, props)
</script>

<template>
  <div class="x-button-group">
    <slot />
  </div>
</template>

<style>
@import url('./button-group.css');
</style>
