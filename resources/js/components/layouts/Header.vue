<template>
  <header class="bg-primary shadow" layout-header>
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center space-between">
          <Logo class="h-10" />
        </div>

        <div class="flex items-center space-x-4">
          <a target="_blank" href="https://github.com/julien-r44/adoscope">
            <span class="iconify text-white" data-icon="carbon:logo-github" data-width="25"></span>
          </a>

          <div class="cursor-pointer" @click="changeDarkMode" v-show="darkMode == true">
            <span class="iconify text-white" data-icon="carbon:moon" data-width="25"></span>
          </div>

          <div class="cursor-pointer" @click="changeDarkMode" v-show="darkMode == false">
            <span class="iconify text-white" data-icon="carbon:sun" data-width="25"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Logo from './Logo.vue'

const darkMode = ref(false)

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkMode.value = true
} else {
  darkMode.value = false
}

const changeDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.theme = darkMode.value ? 'dark' : 'light'

  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

</script>
