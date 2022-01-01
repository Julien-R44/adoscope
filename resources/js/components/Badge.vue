<template>
  <div :class="{
    'text-white px-2 py-1 inline-block rounded-md font-medium': true,
    'bg-yellow-500': type === 'warning',
    'bg-red-500': type === 'danger',
    'bg-blue-500': type === 'info',
    'bg-green-500': type === 'secondary',
  }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    validator: value => ['info', 'danger', 'secondary', 'warning'].includes(value),
  }
})
</script>
