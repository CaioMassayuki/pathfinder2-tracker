<script setup lang="ts">
import { Card, CardType } from "../../definitions";

defineProps<{ cardInfo: Card; type: CardType; disabled?: boolean }>();
</script>

<template>
  <div
    class="pb-2 flex rounded-b-sm border-b-2"
    :class="{
      'border-blue-500': type === 'resource',
      'border-red-500': type === 'action',
      'border-neutral-500': disabled,
    }"
  >
    <h3
      class="w-8/12 text-start text-xl font-bold text-nowrap text-ellipsis overflow-x-hidden ease-in-transition"
      :class="{
        'hover:text-blue-300': type === 'resource',
        'hover:text-red-300': type === 'action',
        'hover:text-white': disabled,
      }"
    >
      {{ cardInfo.title }}
    </h3>
    <span class="w-4/12 flex justify-end items-center">
      <p class="mr-1">
        {{
          cardInfo.options.quantity
            ? `Quantidade: ${cardInfo.options.quantity.current}/${cardInfo.options.quantity.max}`
            : ""
        }}
      </p>
      <button
        v-if="type === 'action'"
        :disabled="disabled"
        @click.stop=""
        class="px-1 h-8 rounded-sm border-2 border-red-500 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
        :class="{
          'border-neutral-500/40 text-white/40 bg-neutral-900/40 hover:border-neutral-500/40 hover:bg-neutral-900/40 cursor-not-allowed':
            disabled,
        }"
      >
        Usar
      </button>
    </span>
  </div>
  <p class="h-12 text-wrap text-start overflow-ellipsis line-clamp-2">
    {{ cardInfo.description }}
  </p>
</template>
