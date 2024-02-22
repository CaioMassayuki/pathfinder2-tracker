<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
</script>

<template>
  <div v-if="isOpen" class="absolute w-full h-full">
    <slot />
  </div>
</template>
