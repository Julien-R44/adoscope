<template>
  <table class="entries-table">
    <thead>
      <tr>
        <th>Message</th>
        <th scope="col">Level</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="entry in entries">
        <td :title="entry.content.message">{{ entry.content.message }}</td>
        <td class="table-fit">
          <span
            class="badge font-weight-light"
            :class="'badge-' + logLevelClass(entry.content.level)"
          >{{ entry.content.level }}</span>
        </td>

        <td class="table-fit">
          <router-link
            :to="{ name: 'log-preview', params: { id: entry.id } }"
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

defineProps({
  entries: {
    required: true,
    type: Array,
  }
})
</script>
