<script setup lang="ts">
import { Button, type ButtonColor, Flex } from '@leex/components'

const colors: ButtonColor[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
</script>

<template>
  <Flex>
    <Button
      v-for="color in colors" :key="color" :color="color"
      outlined
    >
      <span>{{ color }}</span>
    </Button>
  </Flex>
  <Flex>
    <Button
      v-for="color in colors" :key="color" :color="color"
      disabled
      outlined
    >
      <span>{{ color }}</span>
    </Button>
  </Flex>
  <Flex>
    <Button
      v-for="color in colors" :key="color" :color="color"
      loading
      outlined
    >
      <span>{{ color }}</span>
    </Button>
  </Flex>
  <Flex>
    <Button
      v-for="color in colors" :key="color" :color="color"
      ghost
      outlined
    >
      <span>{{ color }}</span>
    </Button>
  </Flex>
</template>
