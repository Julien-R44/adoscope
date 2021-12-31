<template>
  <div class="flex-1 mt-1 adoscope-card-bg rounded-md shadow overflow-hidden">
    <div class="text-3xl font-bold bg-primary">
      <div class="py-4 px-6 text-white">{{ title }}</div>
    </div>

    <table class="entries-table">
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

  th,
  td {
    padding: 0.75rem 1.25rem;
    @apply border-t border-primary-100 dark:border-secondary;
  }

  tr {
    @apply transition-colors cursor-pointer;
  }

  th.table-fit,
  td.table-fit {
    @apply whitespace-nowrap w-1;
  }
}
</style>
