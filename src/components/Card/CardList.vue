<script setup lang="ts">
import { Cards, CardType } from "../../definitions";
import CardContent from "./CardContent.vue";
import CardItem from "./CardItem.vue";

defineProps<{ cards: Cards; type: CardType }>();
const emit = defineEmits(["open-dialog"]);

function handleOpenDialog(id: string) {
  emit("open-dialog", id);
}
</script>

<template>
  <CardItem v-for="(card, index) in cards" :key="card.title + index" :type="type" @open-dialog="handleOpenDialog(card.id)">
    <CardContent :card-info="card" :type="type" />
  </CardItem>
</template>
