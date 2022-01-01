<template>
  <EntryPreview title="Model Details" entry-type="model" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Model</td>
        <td>{{ entry.content.model_name }}:{{ entry.content.model_id }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Action</td>
        <td>
          <Badge :type="modelActionClass(entry.content.action)">{{ entry.content.action }}</Badge>
        </td>
      </tr>
    </template>

    <template #after-attributes-card="{ entry }">
      <div
        class="adoscope-card-bg rounded-md overflow-hidden shadow my-8 text-white"
        v-if="entry.content.changes && entry.content.action != 'deleted'"
      >
        <div class="text-xl font-bold bg-primary">
          <div class="py-4 px-6 text-white">Changes</div>
        </div>

        <div class="p-4 mb-0 text-white">
          <vue-json-pretty :data="entry.content.changes" />
        </div>
      </div>
    </template>
  </EntryPreview>
</template>

<script setup>
import EntryPreview from '@/components/EntryPreview.vue';
import { modelActionClass } from '@/helpers/helpers';
import VueJsonPretty from 'vue-json-pretty';
import Badge from '@/components/Badge.vue';
</script>
