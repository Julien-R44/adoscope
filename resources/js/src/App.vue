<template>
  <div class="bg-gray-50 font-sans text-base antialiased nuxt-text-default">
    <Header />

    <div class="min-h-shell my-8">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[18em,1fr] gap-16">
          <EntriesTypeNav
            :entriesTypes="entriesTypes"
            :selectedEntryType="selectedEntryType"
            @update:selectedEntryType="onSelectedEntryTypeUpdated"
          />

          <component :is="selectedEntryType?.indexScreenComponent" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import Header from './components/layouts/Header.vue';
import EntriesTypeNav from './components/EntriesTypeNav.vue'
import Footer from './components/layouts/Footer.vue';
import { entriesTypes } from './constants/entriesTypes';

const selectedEntryType = shallowRef(entriesTypes[0])

function onSelectedEntryTypeUpdated(newEntryType) {
  selectedEntryType.value = newEntryType
}
</script>

