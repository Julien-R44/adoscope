<template>
  <div class="flex flex-col">
    <div
      @click="$emit('update:selectedEntryType', entryType)"
      v-for="entryType in entriesTypes"
      :key="entryType.name"
      :class="classesBindings(entryType)"
    >
      <span class="iconify" :data-icon="entryType.icon" data-width="25"></span>
      <span>{{ entryType.name }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedEntryType: {
    type: [Object, null]
  },
  entriesTypes: {
    type: Array
  }
})

defineEmits(['update:selectedEntryType'])

const isEntrySelected = (entryType) => props.selectedEntryType?.name === entryType.name
const classesBindings = (entryType) => ({
  'nav-item': true,
  'nav-item--selected': isEntrySelected(entryType)
})
</script>


<style lang="postcss" scoped>
.nav-item {
  @apply adoscope-card-bg flex space-x-4 py-3 mb-4 rounded-lg px-4 cursor-pointer;
  &--selected {
    @apply text-primary bg-gray-100;
  }
}
</style>
