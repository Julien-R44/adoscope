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
            <th>Avg.</th>
          </thead>

          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('GET')">GET</Badge>
            </td>
            <td>/getQueries</td>
            <td class="table-fit">1.2s</td>
          </tr>

          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('DELETE')">DELETE</Badge>
            </td>
            <td>/blablaBla</td>
            <td class="table-fit">1.15s</td>
          </tr>

          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('GET')">GET</Badge>
            </td>
            <td>/getQueries</td>
            <td class="table-fit">0.8s</td>
          </tr>

          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('POST')">POST</Badge>
            </td>
            <td>/postQueries</td>
            <td class="table-fit">0.7s</td>
          </tr>
          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('PUT')">PUT</Badge>
            </td>
            <td>/post</td>
            <td class="table-fit">0.4s</td>
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

          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('GET')">GET</Badge>
            </td>
            <td>/getQueries</td>
            <td class="table-fit">
              <Badge :type="requestStatusClass('500')">{{ '500' }}</Badge>
            </td>
            <td class="table-fit">
              <router-link :to="{ name: 'request-preview', params: { id: 1 } }">
                <span
                  class="iconify hover:text-primary cursor-pointer"
                  data-icon="ant-design:eye-outlined"
                  data-width="25"
                ></span>
              </router-link>
            </td>
          </tr>

          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('GET')">GET</Badge>
            </td>
            <td>/getQueries</td>
            <td class="table-fit">
              <Badge :type="requestStatusClass('401')">{{ '401' }}</Badge>
            </td>
            <td class="table-fit">
              <router-link :to="{ name: 'request-preview', params: { id: 1 } }">
                <span
                  class="iconify hover:text-primary cursor-pointer"
                  data-icon="ant-design:eye-outlined"
                  data-width="25"
                ></span>
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="table-fit">
              <Badge :type="requestMethodClass('GET')">GET</Badge>
            </td>
            <td>/getQueries</td>
            <td class="table-fit">
              <Badge :type="requestStatusClass('422')">{{ '422' }}</Badge>
            </td>
            <td class="table-fit">
              <router-link :to="{ name: 'request-preview', params: { id: 1 } }">
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
</script>
