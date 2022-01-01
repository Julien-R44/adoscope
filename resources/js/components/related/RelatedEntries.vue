<template>
  <div class="adoscope-card-bg rounded-md overflow-hidden shadow mt-5" v-if="hasRelatedEntries">
    <ul class="nav nav-pills text-white">
      <li class="nav-item" v-for="tab in separateTabs">
        <a
          class="nav-link"
          :class="{ active: currentTab == tab.type }"
          href="#"
          v-on:click.prevent="activateTab(tab.type)"
          v-if="tab.count"
        >{{ tab.title }} ({{ tab.count }})</a>
      </li>
    </ul>
    <div>
      <!-- Related Exceptions -->
      <table class="entries-table" v-show="currentTab == 'exceptions' && exceptions.length">
        <thead>
          <tr>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="entry in exceptions">
            <td :title="entry.content.class">
              {{ entry.content.class }}
              <br />
              <small class="text-muted">{{ entry.content.message }}</small>
            </td>

            <td class="table-fit">
              <router-link
                :to="{ name: 'exception-preview', params: { id: entry.id } }"
                class="control-action"
              >
                <span
                  class="iconify hover:text-primary cursor-pointer"
                  data-icon="ant-design:eye-outlined"
                  data-width="25"
                ></span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Related Logs -->
      <RelatedLogs v-show="currentTab == 'logs' && logs.length" :entries="logs" />
      <RelatedQueries v-show="currentTab == 'queries' && queries.length" :entries="queries" />
      <RelatedModels v-show="currentTab == 'models' && models.length" :entries="models" />
      <RelatedEvents v-show="currentTab == 'events' && events.length" :entries="events" />
      <RelatedRedis v-show="currentTab == 'redis' && redis.length" :entries="redis" />

      <!-- Related Mail -->
      <table class="entries-table" v-show="currentTab == 'mails' && mails.length">
        <thead>
          <tr>
            <th>Mailable</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="entry in mails">
            <td>
              <span :title="entry.content.mailable">{{ entry.content.mailable || '-' }}</span>

              <span
                class="badge badge-secondary font-weight-light ml-2"
                v-if="entry.content.queued"
              >Queued</span>

              <br />

              <small
                class="text-muted"
                :title="entry.content.subject"
              >Subject: {{ entry.content.subject }}</small>
            </td>

            <td class="table-fit">
              <router-link
                :to="{ name: 'mail-preview', params: { id: entry.id } }"
                class="control-action"
              >
                <span
                  class="iconify hover:text-primary cursor-pointer"
                  data-icon="ant-design:eye-outlined"
                  data-width="25"
                ></span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { timeAgo, logLevelClass, modelActionClass } from '@/helpers/helpers'
import { ref } from 'vue'
import Badge from '../Badge.vue'
import RelatedLogs from './RelatedLogs.vue'
import RelatedQueries from './RelatedQueries.vue'
import RelatedModels from './RelatedModels.vue'
import RelatedEvents from './RelatedEvents.vue'
import RelatedRedis from './RelatedRedis.vue'

const { entry, batch } = defineProps({
  entry: {
    type: Object,
    required: true,
  },
  batch: {
    type: Array,
    required: true,
  },
})

const currentTab = ref('exceptions')

const exceptions = batch.filter(entry => entry.type === 'exception')
const logs = batch.filter(entry => entry.type === 'log')
const queries = batch.filter(entry => entry.type === 'query')
const models = batch.filter(entry => entry.type === 'model')
const mails = batch.filter(entry => entry.type === 'mail')
const events = batch.filter(entry => entry.type === 'event')
const redis = batch.filter(entry => entry.type === 'redis')

const tabs = [
  { title: "Exceptions", type: "exceptions", count: exceptions.length },
  { title: "Logs", type: "logs", count: logs.length },
  { title: "Queries", type: "queries", count: queries.length },
  { title: "Models", type: "models", count: models.length },
  { title: "Mail", type: "mails", count: mails.length },
  { title: "Events", type: "events", count: events.length },
  { title: "Redis", type: "redis", count: redis.length },
].filter(tab => tab.count)

const separateTabs = tabs
const hasRelatedEntries = tabs.some(tab => tab.count)

if (hasRelatedEntries) {
  const hashLocation = window.location.hash.substring(1)
  currentTab.value = tabs[0].type
}

const activateTab = (type) => {
  currentTab.value = type
  if (window.history.replaceState) {
    // window.history.replaceState(null, null, '#' + currentTab.value);
  }
}
</script>
