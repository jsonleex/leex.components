<script setup lang="ts">
import { ref } from 'vue'
import { Button, ButtonGroup, Icon } from '@leex/components'

const start = ref(false)

function toggleStart() {
  start.value = !start.value
}
</script>

<template>
  <ButtonGroup>
    <Button rounded>
      <Icon icon="solar:skip-previous-bold" />
    </Button>
    <Button>
      <Icon icon="solar:pause-bold" />
    </Button>
    <Button square>
      <Icon icon="solar:skip-next-bold" />
    </Button>
  </ButtonGroup>
  <ButtonGroup color="primary">
    <Button square disabled>
      <Icon icon="solar:skip-previous-bold" />
    </Button>
    <Button>
      <Icon icon="solar:pause-bold" />
    </Button>
    <Button rounded>
      <Icon icon="solar:skip-next-bold" />
    </Button>
  </ButtonGroup>
  <ButtonGroup color="danger" outlined square>
    <Button>
      <Icon icon="solar:skip-previous-bold" />
    </Button>
    <Button color="success">
      <Icon icon="solar:pause-bold" />
    </Button>
    <Button>
      <Icon icon="solar:skip-next-bold" />
    </Button>
  </ButtonGroup>

  <ButtonGroup square>
    <Button color="primary">
      <Icon icon="ri:pencil-ruler-fill" />
      <span>Edit</span>
    </Button>
    <Button color="danger">
      <Icon icon="ri:delete-back-2-fill" />
      <span>Delete</span>
    </Button>
    <Button :active="start" color="warning" @click="toggleStart">
      <Icon :icon="start ? 'ri:star-fill' : 'ri:star-line'" />
    </Button>
  </ButtonGroup>
</template>
