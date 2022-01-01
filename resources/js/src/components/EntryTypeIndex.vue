<template>
  <div>
    <div class="flex-1 mt-1 adoscope-card-bg rounded-md shadow overflow-hidden">
      <div class="text-3xl font-bold bg-primary">
        <div class="py-4 px-6 text-white">{{ title }}</div>
      </div>

      <div
        v-if="ready && entries.length === 0"
        class="flex flex-col justify-center my-12 items-center"
      >
        <span class="iconify text-primary" data-icon="ion:telescope-sharp" data-width="100px"></span>
        <span class="mt-2">No entries found ! Try again later.</span>
      </div>

      <table class="entries-table" v-if="ready && entries.length > 0">
        <thead>
          <slot name="table-header" />
        </thead>

        <tr v-for="entry in entries" :key="entry.id">
          <slot name="table-row" :entry="entry" />
        </tr>
      </table>
    </div>
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
const ready = ref(false)

Api.fetchEntries(props.entryType).then(fetchedEntries => {
  entries.value = fetchedEntries
  ready.value = true
})
</script>
