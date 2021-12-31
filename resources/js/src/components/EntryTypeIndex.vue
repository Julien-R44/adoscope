<template>
  <div class="flex-1 mt-1 nuxt-card-bg rounded-md shadow overflow-hidden">
    <div class="text-3xl font-bold bg-primary">
      <div class="py-4 px-6 text-white">{{ title }}</div>
    </div>

    <table class="entries-table table">
      <thead>
        <slot name="table-header" />
      </thead>

      <tr v-for="entry in entries" :key="entry.id">
        <slot name="table-row" :entry="entry" />
      </tr>
    </table>
  </div>
</template>


<script setup>
import { reactive, ref } from 'vue'
import { Api } from '../services/Api'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  entryType: {
    type: String,
    required: true
  },
})

const entries = ref([])

Api.fetchEntries(props.entryType).then(fetchedEntries => {
  entries.value = fetchedEntries
})
</script>

<style lang="postcss">
.entries-table {
  @apply w-full text-left text-sm;
  th {
    @apply px-6 py-4 text-base font-thin;
  }
}
</style>
