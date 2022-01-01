<template>
  <EntryPreview title="Log Details" entry-type="log" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Level</td>
        <td>
          <Badge :type="logLevelClass(entry.content.level)">{{ entry.content.level }}</Badge>
        </td>
      </tr>
    </template>

    <template #after-attributes-card="{ entry }">
      <div class="adoscope-card-bg rounded-md overflow-hidden shadow my-8 text-white">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'message' }"
              href="#"
              v-on:click.prevent="currentTab = 'message'"
            >Log Message</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'context' }"
              href="#"
              v-on:click.prevent="currentTab = 'context'"
            >Context</a>
          </li>
        </ul>
        <div>
          <pre class="p-4 mb-0" v-show="currentTab == 'message'">{{ entry.content.message }}</pre>
          <div class="p-4 mb-0" v-show="currentTab == 'context'">
            <vue-json-pretty :data="entry.content.context"></vue-json-pretty>
          </div>
        </div>
      </div>
    </template>
  </EntryPreview>
</template>

<script setup>
import EntryPreview from '@/components/EntryPreview.vue';
import Badge from '@/components/Badge.vue'
import { logLevelClass } from '@/helpers/helpers';
import { ref } from 'vue';
import VueJsonPretty from 'vue-json-pretty'

const currentTab = ref('message')
</script>
