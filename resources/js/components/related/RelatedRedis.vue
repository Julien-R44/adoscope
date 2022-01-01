<template>
  <table class="entries-table">
    <thead>
      <tr>
        <th>Command</th>
        <th>Duration</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="entry in entries">
        <td :title="entry.content.command">{{ entry.content.command }}</td>
        <td class="table-fit">{{ entry.content.time }}ms</td>

        <td class="table-fit">
          <router-link
            :to="{ name: 'redis-preview', params: { id: entry.id } }"
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
const { entries } = defineProps({
  entries: {
    required: true,
    type: Array,
  }
})
</script>

