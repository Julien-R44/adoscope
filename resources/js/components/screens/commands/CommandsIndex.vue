<template>
  <EntryTypeIndex title="Commands" entry-type="command">
    <template #table-header>
      <th scope="col">Command</th>
      <th class="table-fit" scope="col">Exit Code</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="pr-0 pl-6">{{ entry.content.command }}</td>

      <td>{{ entry.content.exit_code }}</td>

      <td class="table-fit" :title="entry.created_at">{{ timeAgo(entry.created_at) }}</td>

      <td class="table-fit">
        <router-link :to="{ name: 'command-preview', params: { id: entry.id } }">
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
import RowsStyles from '@/helpers/RowsStyles';
import { formatDistanceToNow, subDays } from 'date-fns'

const timeAgo = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: false, includeSeconds: true })
}
</script>
