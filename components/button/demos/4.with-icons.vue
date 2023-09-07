<script setup lang="ts">
import { Button, Flex, Icon } from '@leex/components'
</script>

<template>
  <Flex>
    <Button>
      <Icon icon="carbon:caret-left" />
      <span>prev</span>
    </Button>
    <Button>
      <span>next</span>
      <Icon icon="carbon:caret-right" />
    </Button>
    <Button color="primary">
      <Icon icon="ri:mail-fill" />
      <span>Email Me</span>
    </Button>
    <Button color="success">
      <span>Share to</span>
      <Icon icon="ri:wechat-2-fill" />
    </Button>
    <Button rounded>
      <Icon icon="ri:search-line" />
      <span>Search</span>
    </Button>
    <Button rounded>
      <Icon icon="ri:search-line" />
    </Button>
  </Flex>
</template>
