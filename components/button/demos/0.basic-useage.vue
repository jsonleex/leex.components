<script setup lang="ts">
import { Button, Flex } from '@leex/components'
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
    <Button rounded>
      <span>rounded</span>
    </Button>
    <Button ghost>
      <span>ghost</span>
    </Button>
  </Flex>
</template>
