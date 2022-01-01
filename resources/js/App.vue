<template>
  <div class="font-sans text-base antialiased bg-gray-50 dark:bg-secondary-900 dark:text-white">
    <Header />

    <div class="min-h-shell">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[18em,1fr] gap-16">
          <div class="relative">
            <EntriesTypeNav :entriesTypes="entriesTypes" class="sticky top-0 pt-8" />
          </div>
          <router-view v-slot="{ Component }" class="mt-8">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/layouts/Header.vue';
import EntriesTypeNav from './components/EntriesTypeNav.vue'
import Footer from './components/layouts/Footer.vue';
import { entriesTypes } from './constants/entriesTypes';
</script>

<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  @apply transition transform duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply translate-y-2 opacity-0;
}
</style>
