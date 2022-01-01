<template>
  <table class="entries-table">
    <thead>
      <tr>
        <th>Model</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="entry in entries">
        <td>{{ entry.content.model_name }}:{{ entry.content.model_id }}</td>
        <td class="table-fit">
          <Badge :type="modelActionClass(entry.content.action)">{{ entry.content.action }}</Badge>
        </td>

        <td class="table-fit">
          <router-link
            :to="{ name: 'model-preview', params: { id: entry.id } }"
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
import { modelActionClass } from '@/helpers/helpers'
import Badge from '@/components/Badge'

const { entries } = defineProps({
  entries: {
    required: true,
    type: Array,
  }
})

</script>
