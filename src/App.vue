<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { DialogState } from "./definitions";
import { useCardsStore } from "./store/cardsStore/useCardStore";
import CardDetail from "./components/CardDetail.vue";
import CardList from "./components/Card/CardList.vue";
import ActionTracker from "./components/ActionTracker.vue";

const store = useCardsStore();
const { cards } = storeToRefs(store);

const dialogInitialState: DialogState = {
  isOpen: false,
  card: null,
};

const actionDialog = ref({ ...dialogInitialState });
const resourceDialog = ref({ ...dialogInitialState });

const dialogHandlers = ref({
  action: {
    openCardDialog: (id: string) => {
      actionDialog.value.isOpen = true;
      actionDialog.value.card = store.getActionCard(id) || null;
    },
    closeCardDialog: () => {
      actionDialog.value.isOpen = false;
      actionDialog.value.card = null;
    },
  },
  resource: {
    openCardDialog: (id: string) => {
      resourceDialog.value.isOpen = true;
      resourceDialog.value.card = store.getResourceCard(id) || null;
    },
    closeCardDialog: () => {
      resourceDialog.value.isOpen = false;
      resourceDialog.value.card = null;
    },
  },
});


</script>

<template>
  <main class="h-svh w-svw flex flex-col items-center justify-start p-4">
    <h1 class="text-5xl font-bold text-center">Pathfinder Action & Inventory Tracker</h1>
    <input
      class="my-2 p-1 h-10 text-xl rounded-md outline-transparent outline outline-2 outline-offset-0 hover:outline-neutral-500 focus:outline-neutral-400 transition-all ease-in-out duration-150"
      placeholder="Search..."
    />
    <ActionTracker />
    <section class="flex w-full h-[780px]">
      <div class="mr-2 w-1/2 h-full flex flex-col rounded-lg border-2 border-red-900 relative">
        <CardDetail
          v-if="actionDialog.isOpen && actionDialog.card"
          @close-dialog="dialogHandlers['action'].closeCardDialog"
          :type="'action'"
          :card="actionDialog.card"
        />
        <div class="flex flex-col p-2 overflow-y-auto">
          <CardList @open-dialog="dialogHandlers['action'].openCardDialog" :cards="cards.actionCards" :type="'action'" />
        </div>
      </div>

      <div class="w-1/2 h-full rounded-lg border-2 border-blue-900 relative">
        <CardDetail
          v-if="resourceDialog.isOpen && resourceDialog.card"
          @close-dialog="dialogHandlers['resource'].closeCardDialog"
          :type="'resource'"
          :card="resourceDialog.card"
        />
        <div class="p-2 grid grid-cols-2 auto-rows-max gap-2 overflow-y-auto">
          <CardList @open-dialog="dialogHandlers['resource'].openCardDialog" :cards="cards.resourceCards" :type="'resource'" />
        </div>
      </div>
    </section>
  </main>
</template>
