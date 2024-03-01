<script setup lang="ts">
import { CardType } from "../../definitions";

defineProps<{ type: CardType; disabled?: boolean }>();
const emit = defineEmits(["open-dialog"]);

function handleOpenDialog() {
  emit("open-dialog");
}
</script>

<template>
  <button
    @click="handleOpenDialog()"
    class="p-2 rounded-lg border-2 hover:shadow-md ease-in-transition"
    :class="[
      {
        'border-blue-500 hover:shadow-blue-200 hover:border-blue-200': type === 'resource',
        'border-red-500 hover:shadow-red-200 hover:border-red-200 mb-2': type === 'action',
        'border-neutral-500 hover:shadow-none hover:border-neutral-500': disabled,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>
