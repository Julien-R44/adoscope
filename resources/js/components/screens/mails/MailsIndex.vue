<template>
  <EntryTypeIndex title="Mails" entry-type="mail">
    <template #table-header>
      <th scope="col">Subject</th>
      <th scope="col">To</th>
      <th scope="col">Recipients</th>
      <th scope="col">Happened</th>
      <th scope="col"></th>
    </template>

    <template #table-row="{ entry }">
      <td class="pr-0 pl-6">{{ entry.content.subject }}</td>
      <td class="table-fit">{{ entry.content.to.map(x => x.address).join(', ') }}</td>
      <td class="table-fit">{{ entry.content.to.length }}</td>
      <td class="table-fit" :title="entry.created_at">{{ timeAgo(entry.created_at) }}</td>

      <td class="table-fit">
        <router-link :to="{ name: 'mail-preview', params: { id: entry.id } }">
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
