<template>
  <EntryTypeIndex title="Models" entry-type="model">
    <template #table-header>
      <th scope="col">Model</th>
      <th scope="col">Action</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="pr-0 pl-6">{{ entry.content.model_name }}:{{ entry.content.model_id }}</td>

      <td class="table-fit">
        <Badge :type="modelActionClass(entry.content.action)">{{ entry.content.action }}</Badge>
      </td>

      <td class="table-fit" :title="entry.created_at">{{ timeAgo(entry.created_at) }}</td>

      <td class="table-fit">
        <router-link :to="{ name: 'model-preview', params: { id: entry.id } }">
          <span
            class="iconify hover:text-primary cursor-pointer"
            data-icon="ant-design:eye-outlined"
            data-width="25"
          ></span>
        </router-link>
      </td>
    </template>
  </EntryTypeIndex>
</template>

<script setup>
import EntryTypeIndex from '@/components/EntryTypeIndex.vue';
import { timeAgo, modelActionClass } from '@/helpers/helpers';
import Badge from '@/components/Badge.vue';
</script>
