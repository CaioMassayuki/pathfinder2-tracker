<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useActionStore } from "../store/actionsStore/useActionStore";

const actionStore = useActionStore();
const { actions } = storeToRefs(actionStore);
</script>

<template>
  <div class="flex w-full my-2">
    <p class="mr-2 text-lg font-bold">Ações:</p>
    <span v-for="index in 3" :key="index" class="mr-1 flex relative items-center">
      <input
        class="appearance-none peer size-8 rounded-sm bg-neutral-200 border-2 border-neutral-400 shrink-0 checked:bg-neutral-950"
        type="checkbox"
        :checked="actions[index - 1]"
        @change="actionStore.toggleAction(index - 1)"
      />
      <span class="absolute left-[8px] top-[1px] text-2xl hidden peer-checked:block pointer-events-none">X</span>
    </span>
    <button
      class="px-1 mr-1 h-8 text-sm leading-none text-center rounded-sm border-2 border-neutral-400 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
      @click="actionStore.resetActions()"
    >
      Reset Actions
    </button>
    <button
      class="px-1 mr-1 h-8 text-sm leading-none text-center rounded-sm border-2 border-neutral-400 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
      @click="actionStore.resetActions()"
    >
      Descanso
    </button>
  </div>
</template>
