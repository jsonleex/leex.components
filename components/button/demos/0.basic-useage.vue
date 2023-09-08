<script setup lang="ts">
import { ref } from 'vue'
import { Button, Flex, Icon } from '@leex/components'

const active = ref(true)
</script>

<template>
  <Flex>
    <Button>
      <span>default</span>
    </Button>
    <Button disabled>
      <span>disabled</span>
    </Button>
    <Button loading>
      <span>loading</span>
    </Button>
    <Button outlined>
      <span>outlined</span>
    </Button>
    <Button :active="active" @click="active = !active">
      <Icon :icon="active ? 'ri:check-line' : 'ri:close-line'" />
    </Button>
    <Button rounded>
      <span>rounded</span>
    </Button>
    <Button ghost>
      <span>ghost</span>
    </Button>
  </Flex>
</template>
