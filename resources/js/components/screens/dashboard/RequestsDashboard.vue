<template>
  <div class="my-8 adoscope-card-bg rounded-md shadow overflow-hidden">
    <div class="text-xl font-bold bg-primary">
      <div class="py-4 px-6 text-white">Requests Summary</div>
    </div>

    <div class="grid grid-cols-2 gap-x-4 p-6">
      <div>
        <div class="mb-4 text-lg">Slowest endpoints</div>
        <table class="entries-table">
          <thead>
            <th>Verb</th>
            <th>Path</th>
            <!-- TODO: Replace by avg -->
            <th>Duration</th>
          </thead>

          <tr v-for="entry in statistics.slowestEndpoints" :key="entry.id">
            <td class="table-fit">
              <Badge :type="requestMethodClass(entry.content.method)">{{ entry.content.method }}</Badge>
            </td>
            <td>{{ entry.content.uri }}</td>
            <td class="table-fit">{{ formatMilliseconds(entry.content.duration) }}</td>
          </tr>
        </table>
      </div>

      <div>
        <div class="mb-4 text-lg">Lasts errors</div>
        <table class="entries-table">
          <thead>
            <th>Verb</th>
            <th>Path</th>
            <th>Status</th>
            <th></th>
          </thead>

          <tr v-for="entry in statistics.lastEndpointsError">
            <td class="table-fit">
              <Badge :type="requestMethodClass(entry.content.method)">{{ entry.content.method }}</Badge>
            </td>
            <td>{{ entry.content.uri }}</td>
            <td class="table-fit">
              <Badge
                :type="requestStatusClass(entry.content.response_status)"
              >{{ entry.content.response_status }}</Badge>
            </td>
            <td class="table-fit">
              <router-link :to="{ name: 'request-preview', params: { id: entry.id } }">
                <span
                  class="iconify hover:text-primary cursor-pointer"
                  data-icon="ant-design:eye-outlined"
                  data-width="25"
                ></span>
              </router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import EntryTypeIndex from '@/components/EntryTypeIndex.vue';
import { requestStatusClass, requestMethodClass, timeAgo } from '@/helpers/helpers';
import Badge from '@/components/Badge.vue';
import { formatMilliseconds } from '@/helpers/helpers'

defineProps({
  statistics: {
    type: Object,
    default: null,
  },
})


</script>
