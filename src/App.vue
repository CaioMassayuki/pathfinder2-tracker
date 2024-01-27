<script setup lang="ts"></script>

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
        class="w-1/2 h-full p-2 mr-2 flex flex-col items-center rounded-lg border-2 border-red-900"
      >
        <button
          v-for="index in 3"
          :key="index"
          class="w-[860px] p-2 mb-2 rounded-lg border-2 border-red-500 hover:shadow-md hover:shadow-red-200 hover:border-red-200 ease-in-transition"
        >
          <div class="pb-2 flex rounded-b-sm border-b-2 border-red-500">
            <h3
              class="w-9/12 text-start hover:text-red-300 text-2xl font-bold text-nowrap text-ellipsis overflow-x-hidden ease-in-transition"
            >
              Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor
              sit
            </h3>
            <span class="w-3/12 flex justify-end items-center">
              <p class="mr-1">Limit 1</p>
              <button
                class="px-1 h-8 rounded-sm border-2 border-red-500 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
              >
                Use Action
              </button>
            </span>
          </div>
          <p class="h-12 text-wrap text-start overflow-ellipsis line-clamp-2">
            Descrição "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodLorem ipsum dolor sit ame. elit, sed do
            eiusmodLorem ipsum dolor sit ame.
          </p>
        </button>
      </div>

      <div
        class="w-1/2 h-full p-2 mr-2 flex items-start rounded-lg border-2 border-blue-900"
      >
        <button
          v-for="index in 3"
          :key="index"
          class="w-[400px] p-2 mb-2 rounded-lg border-2 border-blue-500 hover:shadow-md hover:shadow-blue-200 hover:border-blue-200 ease-in-transition"
        >
          <div class="pb-2 flex rounded-b-sm border-b-2 border-blue-500">
            <h3
              class="w-9/12 text-start hover:text-blue-300 text-2xl font-bold text-nowrap text-ellipsis overflow-x-hidden ease-in-transition"
            >
              Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor
              sit
            </h3>
            <span class="w-3/12 flex justify-end items-center">
              <p class="mr-1">Limit 1</p>
              <button
                class="px-1 h-8 rounded-sm border-2 border-blue-500 bg-neutral-900 hover:border-neutral-50 hover:bg-neutral-800 transition-all ease-in-out duration-150"
              >
                Use Action
              </button>
            </span>
          </div>
          <p class="h-12 text-wrap text-start overflow-ellipsis line-clamp-2">
            Descrição "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodLorem ipsum dolor sit ame. elit, sed do
            eiusmodLorem ipsum dolor sit ame.
          </p>
        </button>
      </div>
    </section>
  </main>
</template>
