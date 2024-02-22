<script setup lang="ts">
import ActionTracker from "./components/ActionTracker.vue";
import CardList from "./components/Card/CardList.vue";
import CardDetail from "./components/CardDetail.vue";
import { useCardsStore } from "./store/store";

const { cards } = useCardsStore()

</script>

<template>
  <main class="h-full flex flex-col items-center justify-start p-4">
    <h1 class="text-5xl font-bold text-center">Pathfinder Action & Inventory Tracker</h1>
    <input
      class="my-2 p-1 h-10 text-xl rounded-md outline-transparent outline outline-2 outline-offset-0 hover:outline-neutral-500 focus:outline-neutral-400 transition-all ease-in-out duration-150"
      placeholder="Search..."
    />
    <ActionTracker />
    <section class="flex w-full h-[780px]">
      <div class="mr-2 w-1/2 h-full flex flex-col rounded-lg border-2 border-red-900 relative">
        <CardDetail :type="'action'" :card="cards.actionCards[0]" />
        <div class="flex flex-col p-2 overflow-y-auto">
          <CardList :cards="cards.actionCards" :type="'action'" />
        </div>
      </div>

      <div class="w-1/2 h-full p-2 grid grid-cols-2 auto-rows-max gap-2 overflow-y-auto rounded-lg border-2 border-blue-900">
        <CardList :cards="cards.itemCards" :type="'resource'" />
      </div>
    </section>
  </main>
</template>
