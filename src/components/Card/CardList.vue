<script setup lang="ts">
import { Cards, CardType } from "../../definitions";
import CardContent from "./CardContent.vue";

defineProps<{ cards: Cards; type: CardType }>();
const emit = defineEmits(["open-dialog"]);

function handleOpenDialog(id: string) {
  emit("open-dialog", id);
}
</script>

<template>
  <button
    v-for="(card, index) in cards"
    :key="card.title + index"
    @click="handleOpenDialog(card.id)"
    class="p-2 rounded-lg border-2 hover:shadow-md ease-in-transition"
    :class="[
      type === 'resource'
        ? 'border-blue-500 hover:shadow-blue-200 hover:border-blue-200'
        : 'border-red-500 hover:shadow-red-200 hover:border-red-200 mb-2',
    ]"
  >
    <CardContent :card-info="card" :type="type" />
  </button>
</template>
