<template>
  <EntryTypeIndex title="Events" entry-type="event">
    <template #table-header>
      <th scope="col">Name</th>
      <th scope="col">Listeners</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="pr-0 pl-6">{{ entry.content.name }}</td>
      <td class="table-fit">{{ entry.content.listeners_count }}</td>
      <td class="table-fit" :title="entry.created_at">{{ timeAgo(entry.created_at) }}</td>

      <td class="table-fit">
        <router-link :to="{ name: 'event-preview', params: { id: entry.id } }">
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
import { timeAgo } from '@/helpers/helpers';
</script>
