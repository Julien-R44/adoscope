<template>
  <EntryPreview title="Query Details" entry-type="query" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Connection</td>
        <td>{{ entry.content.connection }}</td>
      </tr>

      <!-- <tr>
        <td class="table-fit font-weight-bold">Location</td>
        <td>{{ entry.content.location }}</td>
      </tr> -->

      <tr>
        <td class="table-fit font-weight-bold">Duration</td>
        <td>{{ entry.content.time }}ms</td>
      </tr>
    </template>

    <template #after-attributes-card="{ entry }">
      <div class="adoscope-card-bg rounded-md overflow-hidden shadow my-8 text-white">
          <div class="text-xl font-bold bg-primary">
            <div class="py-4 px-6 text-white">Query</div>
          </div>

          <highlightjs language="sql" :code="format(entry.content.sql)" />
      </div>
    </template>
  </EntryPreview>
</template>

<script setup>
import EntryPreview from '@/components/EntryPreview.vue';
import { format } from 'sql-formatter'
</script>
