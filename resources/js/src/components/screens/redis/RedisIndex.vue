<template>
  <EntryTypeIndex title="Redis" entry-type="redis">
    <template #table-header>
      <th scope="col">Command</th>
      <th scope="col">Duration</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="pr-0 pl-6">{{ entry.content.command }}</td>

      <td class="table-fit">{{ entry.content.time }}ms</td>
      <td class="table-fit" :title="entry.created_at">{{ timeAgo(entry.created_at) }}</td>

      <td class="table-fit">
        <router-link :to="{ name: 'redis-preview', params: { id: entry.id } }">
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
import EntryTypeIndex from '../../EntryTypeIndex.vue';
import RowsStyles from '../../../helpers/RowsStyles';
import { formatDistanceToNow, subDays } from 'date-fns'

const timeAgo = (date) => formatDistanceToNow(new Date(date), { addSuffix: false, includeSeconds: true })
</script>
