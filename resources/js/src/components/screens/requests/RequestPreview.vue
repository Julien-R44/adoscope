<template>
  <EntryPreview title="Request Details" entry-type="request" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Method</td>
        <td>{{ entry.content.method }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Controller Action</td>
        <td>{{ entry.content.controller_action }}</td>
      </tr>

      <tr v-if="entry.content.middleware">
        <td class="table-fit font-weight-bold">Middleware</td>
        <td>{{ [entry.content.middleware].flat().join(", ") }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Path</td>
        <td>{{ entry.content.uri }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Status</td>
        <td>{{ entry.content.response_status }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Duration</td>
        <td>{{ entry.content.duration || '-' }} ms</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">IP Address</td>
        <td>{{ entry.content.ip_address || '-' }}</td>
      </tr>
    </template>

    <template #after-attributes-card="{ entry }">
      <div class="adoscope-card-bg rounded-md overflow-hidden shadow mt-5 text-white">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'payload' }"
              href="#"
              v-on:click.prevent="currentTab = 'payload'"
            >Payload</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'headers' }"
              href="#"
              v-on:click.prevent="currentTab = 'headers'"
            >Headers</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'session' }"
              href="#"
              v-on:click.prevent="currentTab = 'session'"
            >Session</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'response' }"
              href="#"
              v-on:click.prevent="currentTab = 'response'"
            >Response</a>
          </li>
        </ul>
        <div class="p-4 mb-0 text-white">
          <vue-json-pretty :data="entry.content.payload" v-if="currentTab == 'payload'" />
          <vue-json-pretty :data="entry.content.headers" v-if="currentTab == 'headers'" />
          <vue-json-pretty :data="entry.content.session" v-if="currentTab == 'session'" />
          <vue-json-pretty :data="entry.content.response" v-if="currentTab == 'response'" />
        </div>
      </div>

      <!-- Additional Information -->
      <!-- <related-entries :entry="entry" :batch="batch"></related-entries> -->
    </template>
  </EntryPreview>
</template>

<script setup>
import { ref } from 'vue';
import EntryPreview from '../../EntryPreview.vue';
import VueJsonPretty from 'vue-json-pretty'

const currentTab = ref('payload');
</script>
