<template>
  <EntryTypeIndex title="Requests" entry-type="request">
    <template #table-header>
      <th scope="col">Verb</th>
      <th scope="col">Path</th>
      <th scope="col">Status</th>
      <th scope="col">Duration</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="table-fit pr-0 pl-6">
        <Badge
          :type="RowsStyles.methods.requestMethodClass(entry.content.method)"
        >{{ entry.content.method }}</Badge>
      </td>

      <td :title="entry.content.uri">{{ entry.content.uri }}</td>

      <td class="table-fit">
        <Badge
          :type="RowsStyles.methods.requestStatusClass(entry.content.response_status)"
        >{{ entry.content.response_status }}</Badge>
      </td>

      <td class="table-fit">
        <span v-if="entry.content.duration">{{ entry.content.duration }}ms</span>
        <span v-else>-</span>
      </td>

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
import Badge from '../Badge.vue';
import { formatDistanceToNow, subDays } from 'date-fns'

const timeAgo = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: false, includeSeconds: true })
}
</script>
