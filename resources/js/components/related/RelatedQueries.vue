<template>
  <table class="entries-table">
    <thead>
      <tr>
        <th>
          Query
          <br />
          <small>{{ entries.length }} queries, {{ queriesSummary.duplicated }} of which are duplicated.</small>
        </th>
        <th>
          Duration
          <br />
          <small>{{ queriesSummary.time }}ms</small>
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in entries">
        <td :title="entry.content.sql">{{ entry.content.sql }}</td>

        <td class="table-fit">
          <span>{{ entry.content.time }}ms</span>
        </td>

        <td class="table-fit">
          <router-link
            :to="{ name: 'query-preview', params: { id: entry.id } }"
            class="control-action"
          >
            <span
              class="iconify hover:text-primary cursor-pointer"
              data-icon="ant-design:eye-outlined"
              data-width="25"
            ></span>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script setup>
import { logLevelClass } from '@/helpers/helpers'

const { entries } = defineProps({
  entries: {
    required: true,
    type: Array,
  }
})

const groupQueriesBySql = (arr) => {
  return arr.reduce((acc, item) => {
    const keyValue = item.content.sql
    if (!acc[keyValue]) {
      acc[keyValue] = []
    }
    acc[keyValue].push(item)
    return acc
  }, {})
}

const queriesSummary = {
  time: entries.reduce((sum, entry) => sum + entry.content.time, 0).toFixed(2),
  duplicated: entries.length - Object.keys(groupQueriesBySql(entries)).length + '',
}
</script>
