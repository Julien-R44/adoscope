<template>
  <div :class="{
    'px-2 py-1 inline-block rounded-md font-medium': true,
    'bg-yellow-200 dark:bg-yellow-500': type === 'warning',
    'bg-red-200 dark:bg-red-500': type === 'danger',
    'bg-blue-200 dark:bg-blue-500': type === 'info',
    'bg-green-200 dark:bg-green-500': type === 'secondary',
  }">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String,
    validator: value => ['info', 'danger', 'secondary', 'warning'].includes(value),
  }
})

</script>
