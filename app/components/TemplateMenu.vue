<script setup lang="ts">
const menuItems = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Nosotros',
    to: '/nosotros'
  }
]
</script>

<template>
  <nav class="flex gap-4">
    <NuxtLink
      v-for="item in menuItems"
      :key="item.to"
      :to="item.to"
      class="text-sm font-medium transition-colors hover:text-primary"
      active-class="text-primary font-semibold"
    >
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>
