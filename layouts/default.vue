<script setup lang="ts">
//const route = useRoute()
</script>

<template>
  <div>
    <AppHeader :home="route && route.name && route.name.includes('index')" />

    <slot />
    <AppFooter />
  </div>
</template>