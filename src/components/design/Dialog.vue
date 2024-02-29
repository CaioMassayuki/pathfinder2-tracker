<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
</script>

<template>
  <div v-if="isOpen" class="absolute">
    <slot />
  </div>
</template>
