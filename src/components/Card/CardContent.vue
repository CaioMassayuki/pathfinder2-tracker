<script setup lang="ts">
defineProps<{ cardInfo: Card; type: CardType }>();
</script>

<template>
  <div
    class="pb-2 flex rounded-b-sm border-b-2"
    :class="[type === 'item' ? 'border-blue-500' : 'border-red-500']"
  >
    <h3
      class="w-8/12 text-start text-xl font-bold text-nowrap text-ellipsis overflow-x-hidden ease-in-transition"
      :class="[type === 'item' ? 'hover:text-blue-300' : 'hover:text-red-300']"
    >
      {{ cardInfo.title }}
    </h3>
    <span class="w-4/12 flex justify-end items-center">
      <p class="mr-1">Limit {{ cardInfo.quantity }}</p>
      <button
        v-if="type === 'action'"
        class="px-1 h-8 rounded-sm border-2 border-red-500 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
      >
        Use Action
      </button>
    </span>
  </div>
  <p class="h-12 text-wrap text-start overflow-ellipsis line-clamp-2">
    {{ cardInfo.description }}
  </p>
</template>
