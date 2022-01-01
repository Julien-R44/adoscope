<template>
  <div>
    <div class="flex-1 mt-1 adoscope-card-bg rounded-md shadow overflow-hidden">
      <div class="text-3xl font-bold bg-primary">
        <div class="py-4 px-6 text-white">{{ title }}</div>
      </div>

      <div v-if="!ready" class="flex flex-col justify-center my-12 items-center">
        <span class="animate-spin iconify" data-icon="codicon:loading" data-width="40px"></span>
        <span class="mt-4">Scanning...</span>
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

        <transition-group tag="tbody" name="list">
          <tr v-show="hasNewEntries" key="newEntries">
            <td colspan="100" class="text-center card-bg-secondary py-1">
              <small>
                <a
                  href="#"
                  v-on:click.prevent="loadNewEntries"
                  v-show="!loadingNewEntries"
                >Load New Entries</a>
              </small>

              <small v-show="loadingNewEntries">Loading...</small>
            </td>
          </tr>

          <tr v-for="entry in entries" :key="entry.id">
            <slot name="table-row" :entry="entry" />
          </tr>

          <tr v-show="hasMoreEntries" key="olderEntries">
            <td colspan="100" class="text-center py-1">
              <small>
                <a
                  href="#"
                  v-on:click.prevent="loadOlderEntries"
                  v-show="!loadingMoreEntries"
                >Load Older Entries</a>
              </small>

              <small v-show="loadingMoreEntries">Loading...</small>
            </td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>


<script setup>
import { onUnmounted, reactive, ref } from 'vue'
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
const NEW_ENTRIES_TIMER = 2500

const entries = ref([])
const ready = ref(false)
const hasMoreEntries = ref(true)
const hasNewEntries = ref(false)
const loadingMoreEntries = ref(false)
const loadingNewEntries = ref(false)
let lastEntryIndex = ''
let newEntriesTimeout = null

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
  checkNewEntries()
})


const loadOlderEntries = () => {
  loadingMoreEntries.value = true;
  loadEntries((fetchedEntries) => {
    entries.value.push(...fetchedEntries);
    loadingMoreEntries.value = false;
  });
}

const loadNewEntries = () => {
  hasMoreEntries.value = true
  hasNewEntries.value = false
  lastEntryIndex = ''
  loadingNewEntries.value = true

  clearTimeout(newEntriesTimeout)

  loadEntries(fetchedEntries => {
    entries.value = fetchedEntries
    loadingNewEntries.value = false
    checkNewEntries()
  })
}

const checkNewEntries = () => {
  newEntriesTimeout = setTimeout(() => {
    Api.fetchEntries(props.entryType, 1).then(fetchedEntries => {
      if (fetchedEntries.length && !entries.value.length) {
        loadNewEntries()
      } else if (fetchedEntries.length && fetchedEntries[0].id !== entries.value[0].id) {
        hasNewEntries.value = true
      } else {
        checkNewEntries()
      }
    })
  }, NEW_ENTRIES_TIMER)
}


onUnmounted(() => {
  clearTimeout(newEntriesTimeout)
})

</script>
