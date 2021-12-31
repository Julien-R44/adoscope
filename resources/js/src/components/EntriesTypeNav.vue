<template>
  <div class="flex flex-col">
    <router-link
      v-for="entryType in entriesTypes"
      :key="entryType.name"
      :class="classesBindings(entryType)"
      :to="{ name: entryType.routeName }"
    >
      <span class="iconify" :data-icon="entryType.icon" data-width="25"></span>
      <span>{{ entryType.name }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  entriesTypes: { type: Array }
})

const route = useRoute()

const isEntrySelected = (entryType) => route.matched.some(({ name }) => name === entryType.routeName)
const classesBindings = (entryType) => ({
  'nav-item': true,
  'nav-item--selected': isEntrySelected(entryType)
})
</script>


<style lang="postcss" scoped>
.nav-item {
  @apply adoscope-card-bg adoscope-card-border flex space-x-4 py-3 mb-4 rounded-lg px-4 cursor-pointer;
}
</style>
