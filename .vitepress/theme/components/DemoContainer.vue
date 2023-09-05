<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'

defineOptions({ name: 'DemoContainer' })

const error = ref<Error | null>(null)

onErrorCaptured((err) => {
  error.value = err
})
</script>

<template>
  <div class="demo">
    <slot />
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<style>
.demo {
  background: var(--vp-code-block-bg);
  padding: 2em;
  position: relative;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color .5s;
}

.demo-source-link {
  color: var(--vp-c-text-2);
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 12px;
  font-weight: 500;
  transition: color .5s
}
</style>
