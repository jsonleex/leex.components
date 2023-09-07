<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'

defineOptions({ name: 'DemoContainer' })

const error = ref<Error | null>(null)

onErrorCaptured((err) => {
  error.value = err
})
</script>

<template>
  <section class="demo">
    <slot />

    <div v-if="error" class="demo-error">
      {{ error }}
    </div>
  </section>
</template>

<style>
.demo {
  position: relative;
  margin: 16px 0;
  padding: 20px 24px;
  background: var(--vp-code-block-bg);
  border-radius: 8px;
  transition: background-color .5s;
}
</style>
