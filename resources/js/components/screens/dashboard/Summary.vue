<template>
  <div class="mt-1 adoscope-card-bg rounded-md shadow overflow-hidden">
    <div class="text-3xl font-bold bg-primary">
      <div class="py-4 px-6 text-white">Summary</div>
    </div>

    <div class="grid grid-cols-4">
      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b border-r"
      >
        <span class="font-bold text-4xl text-green-500">{{ millify(165412) }}</span>
        <span>Requests 🚀</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b border-r"
      >
        <span class="font-bold text-4xl text-green-500">{{ millify(1241) }}</span>
        <span>SQL queries 🗄️</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b border-r"
      >
        <span class="font-bold text-4xl text-red-500">25</span>
        <span>Exceptions 🐛</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-b"
      >
        <span class="font-bold text-4xl text-green-500">1.2s</span>
        <span>Avg. request time ⚡</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-r"
      >
        <span class="font-bold text-4xl text-green-500">524ms</span>
        <span>Avg. query time 🔥</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-r"
      >
        <span class="font-bold text-4xl text-green-500">78</span>
        <span>Mails 📨</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2 border-r"
      >
        <span class="font-bold text-4xl text-green-500">487</span>
        <span>Redis commands 💾</span>
      </div>

      <div
        class="flex flex-col items-center py-8 dark:border-secondary border-primary-100 space-y-2"
      >
        <span class="font-bold text-4xl text-green-500">{{ millify(12465) }}</span>
        <span>Events 🙌</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { millify } from 'millify'
</script>
