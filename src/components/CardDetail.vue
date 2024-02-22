<script setup lang="ts">
import CardOptionsDialog from "./CardOptionsDialog.vue";

const props = defineProps<{ type: CardType; card: Card }>();
</script>

<template>
  <div class="bg-neutral-950/70 absolute w-full h-full flex justify-center items-center">
    <div
      class="relative bg-neutral-800 w-5/6 h-5/6 border-2 rounded-xl"
      :class="[type === 'resource' ? 'border-blue-500' : 'border-red-500']"
    >
      <CardOptionsDialog is-open :type="props.type" :options="props.card.options" />
      <div class="p-2 flex flex-col items-start">
        <div
          class="flex items-end w-full mb-2 mt-4 text-2xl border-b-2"
          :class="[type === 'resource' ? 'border-blue-500' : 'border-red-500']"
        >
          <input class="w-11/12 p-2 bg-transparent outline-none" value="A" />
          <div
            class="w-1/12 text-base flex flex-col items-center p-2 border-l-2"
            :class="[type === 'resource' ? 'border-blue-500' : 'border-red-500']"
          >
            <button>Opções</button>
          </div>
        </div>
        <textarea class="w-full h-full p-2 resize-none bg-transparent outline-none">A</textarea>
      </div>
    </div>
  </div>
</template>
