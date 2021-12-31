<template>
  <div>
    <div class="mt-1 adoscope-card-bg rounded-md shadow overflow-hidden">
      <div class="text-3xl font-bold bg-primary">
        <div class="py-4 px-6 text-white">{{ title }}</div>
      </div>

      <div class="table-responsive">
        <table class="entries-table mb-0 card-bg-secondary table-borderless" v-if="ready">
          <tbody>
            <tr>
              <td class="table-fit font-weight-bold">Time</td>
              <td>{{ localTime(entry.created_at) }} ({{ timeAgo(entry.created_at) }})</td>
            </tr>

            <!-- <tr>
            <td class="table-fit font-weight-bold">Hostname</td>
            <td>{{ entry.content.hostname }}</td>
            </tr>-->

            <slot name="table-parameters" :entry="entry"></slot>
            <!--
          <tr v-if="!entryPoint && job">
            <td class="table-fit font-weight-bold">Job</td>
            <td>
              <router-link
                :to="{ name: 'job-preview', params: { id: job.id } }"
                class="control-action"
              >View Job</router-link>
            </td>
            </tr>-->

            <!-- <tr v-if="!entryPoint && request">
            <td class="table-fit font-weight-bold">Request</td>
            <td>
              <router-link
                :to="{ name: 'request-preview', params: { id: request.id } }"
                class="control-action"
              >View Request</router-link>
            </td>
            </tr>-->

            <!-- <tr v-if="!entryPoint && command">
            <td class="table-fit font-weight-bold">Command</td>
            <td>
              <router-link
                :to="{ name: 'command-preview', params: { id: command.id } }"
                class="control-action"
              >View Command</router-link>
            </td>
            </tr>-->

            <!-- <tr v-if="entry.tags.length">
            <td class="table-fit font-weight-bold">Tags</td>
            <td>
              <router-link
                v-for="tag in entry.tags"
                :key="tag"
                :to="{ name: resource, query: { tag: tag } }"
                class="badge badge-info mr-1 font-weight-light"
              >{{ tag }}</router-link>
            </td>
            </tr>-->
          </tbody>
        </table>
      </div>
    </div>

    <slot v-if="ready && entry" name="after-attributes-card" :entry="entry"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatDistanceToNow, subDays } from 'date-fns'
import { Api } from '../services/Api'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})

const ready = ref(false)
const entry = ref({})

const timeAgo = (date) => formatDistanceToNow(new Date(date), { addSuffix: false, includeSeconds: true })
const localTime = (date) => new Date(date).toLocaleString()


Api.fetchEntry(props.id).then(response => {
  entry.value = response
  ready.value = true
})

</script>
