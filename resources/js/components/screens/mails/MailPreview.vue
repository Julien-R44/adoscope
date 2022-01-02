<template>
  <EntryPreview title="Mail Details" entry-type="mail" :id="$route.params.id">
    <template #table-parameters="{ entry }">
      <tr>
        <td class="table-fit font-weight-bold">Mailer</td>
        <td>{{ entry.content.mailer }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">From</td>
        <td>{{ entry.content.from }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">To</td>
        <td>{{ formatAddresses(entry.content.to) }}</td>
      </tr>

      <tr v-if="entry.content.cc">
        <td class="table-fit font-weight-bold">CC</td>
        <td>{{ formatAddresses(entry.content.cc) }}</td>
      </tr>

      <tr v-if="entry.content.replyTo">
        <td class="table-fit font-weight-bold">Reply To</td>
        <td>{{ formatAddresses(entry.content.replyTo) }}</td>
      </tr>

      <tr v-if="entry.content.bcc">
        <td class="table-fit font-weight-bold">BCC</td>
        <td>{{ formatAddresses(entry.content.bcc) }}</td>
      </tr>

      <tr v-if="entry.content.rejected.length">
        <td class="table-fit font-weight-bold">Rejected Emails</td>
        <td>{{ formatAddresses(entry.content.rejected) }}</td>
      </tr>

      <tr>
        <td class="table-fit font-weight-bold">Subject</td>
        <td>{{ entry.content.subject }}</td>
      </tr>
    </template>

    <template #after-attributes-card="{ entry }">
      <div class="adoscope-card-bg rounded-md overflow-hidden shadow my-8 text-white">
        <div class="text-xl font-bold bg-primary">
          <div class="py-4 px-6 text-white">Preview</div>
        </div>

        <!-- TODO: Make email preview -->
      </div>
    </template>
  </EntryPreview>
</template>

<script setup>
import EntryPreview from '@/components/EntryPreview.vue';
import { format } from 'sql-formatter'
import VueJsonPretty from 'vue-json-pretty'

const formatAddresses = (addresses) => addresses.map(x => x.address).join(', ')
</script>
