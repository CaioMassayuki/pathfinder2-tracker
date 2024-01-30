<script setup lang="ts">
import CardList from "./components/Card/CardList.vue";

type TESTE = {
  actionCards: Cards,
  itemCards: Cards,
}

const DEFAULT_CARDS: TESTE = {
  actionCards: [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      quantity: "1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      quantity: "1000",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
  ],
  itemCards: [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      quantity: "1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      quantity: "1000",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
    {
      title: "Lorem",
      description: "Lorem ",
      quantity: "unlimited",
    },
  ],
};
</script>

<template>
  <main class="h-full flex flex-col items-center justify-start p-4">
    <h1 class="text-5xl font-bold text-center">
      Pathfinder Action & Inventory Tracker
    </h1>
    <input
      class="my-2 p-1 h-10 text-xl rounded-md outline-transparent outline outline-2 outline-offset-0 hover:outline-neutral-500 focus:outline-neutral-400 transition-all ease-in-out duration-150"
      placeholder="Search..."
    />
    <div class="flex w-full my-2">
      <div class="flex items-center">
        <p class="mr-2 text-lg font-bold">Actions:</p>
        <span
          v-for="index in 3"
          :key="index"
          class="mr-1 flex relative items-center"
        >
          <input
            class="appearance-none peer size-8 rounded-sm bg-neutral-200 border-2 border-neutral-400 shrink-0 checked:bg-neutral-950"
            type="checkbox"
          />
          <span
            class="absolute left-[8px] top-[1px] text-2xl hidden peer-checked:block pointer-events-none"
            >X</span
          >
        </span>
        <button
          class="px-1 mr-1 h-8 text-sm leading-none text-center rounded-sm border-2 border-neutral-400 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
        >
          Reset
        </button>
        <button
          class="px-1 mr-1 h-8 text-sm leading-none text-center rounded-sm border-2 border-neutral-400 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
        >
          Reset All
        </button>
      </div>
    </div>
    <section class="flex w-full h-[780px]">
      <div
        class="mr-2 w-1/2 h-full p-2 flex flex-col overflow-y-auto rounded-lg border-2 border-red-900"
      >
        <CardList :cards="DEFAULT_CARDS.actionCards" :type="'action'" />
      </div>

      <div
        class="w-1/2 h-full p-2 grid grid-cols-2 auto-rows-max gap-2 overflow-y-auto rounded-lg border-2 border-blue-900"
      >
        <CardList :cards="DEFAULT_CARDS.itemCards" :type="'item'" />
      </div>
    </section>
  </main>
</template>
