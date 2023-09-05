<script setup lang="ts">
import { Button, ButtonSize } from '@leex/components'
</script>

<template>
  <div>
    <p>Basic</p>
    <Button>Click Me</Button>

    <p>Size</p>
    <Button v-for="size in [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large]" :key="size" :size="size">
      {{ size }}
    </Button>
  </div>
</template>
