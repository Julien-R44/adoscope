<template>
  <div class="mt-1 adoscope-card-bg rounded-md shadow overflow-hidden">
    <div class="text-3xl font-bold bg-primary">
      <div class="py-4 px-6 text-white">Summary</div>
    </div>

    <div class="grid grid-cols-4">
      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b border-r"
      >
        <span class="font-bold text-4xl text-green-500">{{ millify(nbRequests) }}</span>
        <span>Requests 🚀</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b border-r"
      >
        <span class="font-bold text-4xl text-green-500">{{ millify(nbQueries) }}</span>
        <span>SQL queries 🗄️</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b border-r"
      >
        <span class="font-bold text-4xl text-red-500">{{ nbExceptions }}</span>
        <span>Exceptions 🐛</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b"
      >
        <span class="font-bold text-4xl text-green-500">{{ avgRequestTime }}</span>
        <span>Avg. request time ⚡</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-r"
      >
        <span class="font-bold text-4xl text-green-500">{{ avgQueryTime }}</span>
        <span>Avg. query time 🔥</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-r"
      >
        <span class="font-bold text-4xl text-green-500">{{ nbMails }}</span>
        <span>Mails 📨</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-r"
      >
        <span class="font-bold text-4xl text-green-500">{{ nbRedis }}</span>
        <span>Redis commands 💾</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2"
      >
        <span class="font-bold text-4xl text-green-500">{{ millify(nbEvents) }}</span>
        <span>Events 🙌</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { millify } from 'millify'
import { computed } from 'vue';
import { formatMilliseconds } from '@/helpers/helpers'

const { statistics: stats } = defineProps({
  statistics: {
    type: Object,
    default: null,
  },
})

const getCount = (type) => stats?.counts.find(({ type: t }) => t === type).count

const nbRequests = computed(() => getCount('request'))
const nbExceptions = computed(() => getCount('exception'))
const nbQueries = computed(() => getCount('query'))
const nbEvents = computed(() => getCount('event'))
const nbMails = computed(() => getCount('mail'))
const nbRedis = computed(() => getCount('redis'))
const avgRequestTime = computed(() => formatMilliseconds(parseInt(stats.avgRequestTime)))
const avgQueryTime = computed(() => formatMilliseconds(parseInt(stats.avgQueryTime)))

</script>
