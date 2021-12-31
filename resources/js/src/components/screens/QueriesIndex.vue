<template>
  <EntryTypeIndex title="Queries" entry-type="query">
    <template #table-header>
      <th scope="col">Query</th>
      <th scope="col">Duration</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="pr-0 pl-6">
        {{ entry.content.sql }}
      </td>

      <td>{{ entry.content.time }}ms</td>

      <td
        class="table-fit"
        :title="entry.created_at"
      > {{ timeAgo(entry.created_at) }} </td>

      <td class="table-fit">
        <span class="iconify" data-icon="ant-design:eye-outlined" data-width="25"></span>
      </td>
    </template>
  </EntryTypeIndex>
</template>

<script setup>
import EntryTypeIndex from '../EntryTypeIndex.vue';
import RowsStyles from '../../helpers/RowsStyles';
import { formatDistanceToNow, subDays } from 'date-fns'

const timeAgo = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: false, includeSeconds: true })
}
</script>
