<template>
  <EntryPreview title="Redis Details" entry-type="redis" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Command</td>
        <td>{{ entry.content.command }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Duration</td>
        <td>{{ entry.content.time }}ms</td>
      </tr>
    </template>
  </EntryPreview>
</template>

<script setup>
import EntryPreview from '@/components/EntryPreview.vue';
</script>
