<template>
  <header class="bg-primary shadow" layout-header>
    <div class="container mx-auto">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center space-between">
          <Logo />
        </div>

        <div class="flex items-center space-x-2">
          <span class="iconify text-white" data-icon="carbon:logo-github" data-width="25"></span>

          <span class="iconify text-white" data-icon="carbon:moon" data-width="25"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from './Logo.vue'

</script>
