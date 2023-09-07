<script setup lang="ts">
import { type Property } from 'csstype'

export interface FlexProps {
  'alignItems'?: Property.AlignItems
  'justifyContent'?: Property.JustifyContent
  'gap'?: Property.Gap
  'flexDirection'?: Property.FlexDirection
  'flexWrap'?: Property.FlexWrap
}

defineOptions({ inheritAttrs: false })
defineProps<FlexProps>()
</script>

<template>
  <div :style="{ display: 'flex', ...$props }">
    <slot />
  </div>
</template>
