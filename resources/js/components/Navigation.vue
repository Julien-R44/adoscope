<template>
  <div class="flex flex-col">
    <div v-for="item in items" :key="item.name">
      <div v-if="item.separator === true" class="mb-6 mt-2"></div>
      <router-link v-else :to="{ name: item.routeName }" :class="classesBindings(item)">
        <span class="iconify" :data-icon="item.icon" data-width="25"></span>
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  items: { type: Array }
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
