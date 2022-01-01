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

      <transition-group tag="tbody" class="block" name="list">
        <table class="entries-table" v-if="ready && entries.length > 0">
          <thead>
            <slot name="table-header" />
          </thead>

          <tr v-for="entry in entries" :key="entry.id">
            <slot name="table-row" :entry="entry" />
          </tr>

          <tr v-if="hasMoreEntries" key="olderEntries">
            <td colspan="100" class="text-center py-1">
              <small>
                <a
                  href="#"
                  v-on:click.prevent="loadOlderEntries"
                  v-if="!loadingMoreEntries"
                >Load Older Entries</a>
              </small>

              <small v-if="loadingMoreEntries">Loading...</small>
            </td>
          </tr>
        </table>
      </transition-group>
    </div>
  </div>
</template>


<script setup>
import { reactive, ref } from 'vue'
import { Api } from '@/services/Api'

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

const ENTRIES_PER_REQUEST = 50

const entries = ref([])
const ready = ref(false)
const hasMoreEntries = ref(true)
const loadingMoreEntries = ref(false)
let lastEntryIndex = ''


const last = (array) => array[array.length - 1]

const loadEntries = (cb) => {
  Api.fetchEntries(props.entryType, ENTRIES_PER_REQUEST, lastEntryIndex).then(fetchedEntries => {
    hasMoreEntries.value = fetchedEntries.length >= ENTRIES_PER_REQUEST
    lastEntryIndex = fetchedEntries.length ? last(fetchedEntries).sequence_id : lastEntryIndex
    cb(fetchedEntries)
  })
}

loadEntries(fetchedEntries => {
  entries.value = fetchedEntries
  ready.value = true
})


const loadOlderEntries = () => {
  loadingMoreEntries.value = true;
  loadEntries((fetchedEntries) => {
    entries.value.push(...fetchedEntries);
    loadingMoreEntries.value = false;
  });
}
</script>
