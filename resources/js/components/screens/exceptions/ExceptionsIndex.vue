<template>
  <EntryTypeIndex title="Exceptions" entry-type="exception">
    <template #table-header>
      <th scope="col">Message</th>
      <th scope="col">Level</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="pr-0 pl-6">{{ entry.content.message }}</td>

      <td class="table-fit">
        <Badge :type="logLevelClass(entry.content.level)">{{ entry.content.level }}</Badge>
      </td>
      <td class="table-fit" :title="entry.created_at">{{ timeAgo(entry.created_at) }}</td>

      <td class="table-fit">
        <router-link :to="{ name: 'exception-preview', params: { id: entry.id } }">
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
import { timeAgo, logLevelClass } from '@/helpers/helpers';
import Badge from '@/components/Badge.vue';
</script>
