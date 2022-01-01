<template>
  <footer class="border-t border-gray-300 dark:border-secondary text-sm">
    <div class="max-w-xl mx-auto py-10">
      <div class="flex items-center justify-between">
        <p>
          <a
            target="_blank"
            href="https://github.com/julien-r44/adoscope"
            class="font-medium underline"
          >Contribute on GitHub</a>
        </p>

        <p class="text-xs font-thin">Adoscope v{{ version }}</p>

        <p class="flex space-x-1">
          <span>Made with ❤️ by</span>
          <a
            target="_blank"
            href="https://github.com/Julien-R44"
            class="font-medium underline"
          >Julien Ripouteau</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
const version = process.env.version
</script>
