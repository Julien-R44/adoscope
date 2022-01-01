<template>
  <EntryPreview title="Event Details" entry-type="event" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Event</td>
        <td>{{ entry.content.name }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Listeners</td>
        <td>{{ entry.content.listeners_count }}</td>
      </tr>
    </template>

    <template #after-attributes-card="{ entry }">
      <div class="adoscope-card-bg rounded-md overflow-hidden shadow mt-5 text-white">
        <div class="text-xl font-bold bg-primary">
          <div class="py-4 px-6 text-white">Event Data</div>
        </div>

        <div class="p-4 mb-0 text-white">
          <vue-json-pretty :data="entry.content.payload" />
        </div>
      </div>
    </template>
  </EntryPreview>
</template>

<script setup>
import EntryPreview from '@/components/EntryPreview.vue';
import { format } from 'sql-formatter'
import VueJsonPretty from 'vue-json-pretty'
</script>
