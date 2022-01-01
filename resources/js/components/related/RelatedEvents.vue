<template>
  <table class="entries-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Listeners</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="entry in entries">
        <td :title="entry.content.name">{{ entry.content.name }}</td>

        <td class="table-fit">{{ entry.content.listeners_count }}</td>

        <td class="table-fit">
          <router-link
            :to="{ name: 'event-preview', params: { id: entry.id } }"
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
</script>
