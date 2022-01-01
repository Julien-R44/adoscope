<template>
  <EntryPreview title="Command Details" entry-type="command" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Command</td>
        <td>{{ entry.content.command }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Exit Code</td>
        <td>{{ entry.content.exit_code }}</td>
      </tr>
    </template>

    <template #after-attributes-card="{ entry, batch }">
      <div class="adoscope-card-bg rounded-md overflow-hidden shadow mt-5 text-white">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'arguments' }"
              href="#"
              v-on:click.prevent="currentTab = 'arguments'"
            >Arguments</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentTab == 'options' }"
              href="#"
              v-on:click.prevent="currentTab = 'options'"
            >Options</a>
          </li>
        </ul>
        <div class="p-4 mb-0 text-white">
          <vue-json-pretty :data="entry.content.arguments" v-if="currentTab == 'arguments'" />
          <vue-json-pretty :data="entry.content.options" v-if="currentTab == 'options'" />
        </div>
      </div>

      <RelatedEntries :entry="entry" :batch="batch"></RelatedEntries>
    </template>
  </EntryPreview>
</template>

<script setup>
import { ref } from 'vue';
import EntryPreview from '@/components/EntryPreview.vue';
import VueJsonPretty from 'vue-json-pretty'
import RelatedEntries from '@/components/RelatedEntries.vue';

const currentTab = ref('arguments');
</script>
