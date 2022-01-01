<template>
  <div>
    <div class="mt-1 adoscope-card-bg rounded-md shadow overflow-hidden">
      <div class="text-3xl font-bold bg-primary">
        <div class="py-4 px-6 text-white">{{ title }}</div>
      </div>

      <table class="entries-table mb-0 card-bg-secondary table-borderless" v-if="ready">
        <tbody>
          <tr>
            <td class="table-fit">Time</td>
            <td>{{ localTime(entry.created_at) }} ({{ timeAgo(entry.created_at) }})</td>
          </tr>

          <tr>
            <td class="table-fit">Hostname</td>
            <td>{{ entry.hostname }}</td>
          </tr>

          <slot name="table-parameters" :entry="entry"></slot>

          <tr v-if="!entryPoint && entryRequest">
            <td class="table-fit font-weight-bold">Request</td>
            <td>
              <router-link
                :to="{ name: 'request-preview', params: { id: entryRequest.id } }"
                class="control-action"
              >View Entry Request</router-link>
            </td>
          </tr>

          <tr v-if="!entryPoint && !entryRequest && entryCommand">
            <td class="table-fit font-weight-bold">Command</td>
            <td>
              <router-link
                :to="{ name: 'command-preview', params: { id: entryCommand.id } }"
                class="control-action"
              >View Entry Command</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="adoscope-card-bg rounded-md overflow-hidden shadow mt-5"
      v-if="ready && entry && entry.content.user && entry.content.user.id"
    >
      <div class="text-xl font-bold bg-primary">
        <div class="py-4 px-6 text-white">Authenticated User</div>
      </div>

      <table class="entries-table">
        <tr>
          <td class="table-fit font-weight-bold">ID</td>

          <td>{{ entry.content.user.id }}</td>
        </tr>

        <tr v-if="entry.content.user.name">
          <td class="table-fit font-weight-bold align-middle">Name</td>

          <td class="align-middle">{{ entry.content.user.name }}</td>
        </tr>

        <tr v-if="entry.content.user.email">
          <td class="table-fit font-weight-bold">Email Address</td>

          <td>{{ entry.content.user.email }}</td>
        </tr>
      </table>
    </div>

    <slot v-if="ready && entry" name="after-attributes-card" :entry="entry" :batch="batch"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Api } from '@/services/Api'
import { timeAgo, localTime } from '@/helpers/helpers'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  entryPoint: {
    type: Boolean,
    default: false,
  }
})

const ready = ref(false)
const entry = ref({})
const batch = ref({})
const entryRequest = ref(null)
const entryCommand = ref(null)

Api.fetchEntry(props.id).then(response => {
  entry.value = response.entry
  batch.value = response.batch

  entryRequest.value = batch.value.find(batchEntry => batchEntry.type === 'request')
  entryCommand.value = batch.value.find(batchEntry => batchEntry.type === 'command')

  ready.value = true
})

</script>
