<script setup lang="ts">
import { Button, type ButtonColor, Flex } from '@leex/components'

const colors: ButtonColor[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
</script>

<template>
  <Flex>
    <Button
      v-for="color in colors" :key="color" :color="color"
      rounded
    >
      <span>{{ color }}</span>
    </Button>
  </Flex>
  <Flex>
    <Button
      v-for="color in colors" :key="color" :color="color"
      rounded
      outlined
    >
      <span>{{ color }}</span>
    </Button>
  </Flex>
</template>
