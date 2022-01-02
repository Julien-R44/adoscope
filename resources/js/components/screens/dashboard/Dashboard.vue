<template>
  <div v-if="statistics">
    <Summary :statistics="statistics" />
    <RequestsDashboard :statistics="statistics" />
  </div>
</template>

<script setup>
import Summary from './Summary.vue';
import RequestsDashboard from './RequestsDashboard.vue';
import { Api } from '@/services/Api';
import { ref } from 'vue';

const statistics = ref(null)

Api.fetchStatistics().then(fetchedStats => {
  statistics.value = fetchedStats
});
</script>
