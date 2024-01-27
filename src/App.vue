<script setup lang="ts"></script>

<template>
  <main class="flex flex-col items-center justify-start p-4">
    <h1 class="text-5xl text-center">Pathfinder Action & Inventory Tracker</h1>
    <input
      class="my-2 p-1 h-10 text-xl rounded-md outline-transparent outline outline-2 outline-offset-0 hover:outline-neutral-500 focus:outline-neutral-400 transition-all ease-in-out duration-150"
      placeholder="Search..."
    />
    <div class="flex w-full">
      <div class="flex items-center">
        <p class="mr-2 text-lg font-bold">Actions</p>
        <span v-for="index in 3" :key="index" class="mr-1 flex relative items-center">
          <input
            class="appearance-none peer size-8 rounded-sm bg-neutral-200 border-2 border-neutral-950 shrink-0 checked:bg-neutral-950 checked:border-neutral-400"
            type="checkbox"
          />
          <span class="absolute left-[8px] top-[1px] text-2xl hidden peer-checked:block pointer-events-none">X</span>
        </span>
        <button class="px-1 h-8 text-sm leading-none text-center rounded-sm border border-neutral-600 bg-neutral-900 hover:border hover:border-neutral-200 transition-all ease-in-out duration-150">Reset</button>
        <button>Reset All</button>
      </div>
    </div>
    <section class="flex border border-neutral-500">
      <div>
        <div class="border border-red-500">
          <div class="border border-red-900">
            <h3>Nome da Ação</h3>
            <button>Use</button>
            <p>Limit 1</p>
          </div>
          <span
            >Descrição "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur</span
          >
        </div>
        <div class="border border-red-500">
          <div class="border border-red-900">
            <h3>Nome da Ação</h3>
            <button>Use</button>
            <p>Limit 1</p>
          </div>
          <span
            >Descrição "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur</span
          >
        </div>
      </div>
      <div>
        <div class="border border-blue-500">
          <div class="border border-blue-900">
            <h3>Nome do Item</h3>
            <p>Quantidade 1</p>
          </div>
          <span
            >Descrição "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur</span
          >
        </div>
        <div class="border border-blue-500">
          <div class="border border-blue-900">
            <h3>Nome do Item</h3>
            <p>Quantidade 1</p>
          </div>
          <span
            >Descrição "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur</span
          >
        </div>
      </div>
    </section>
  </main>
</template>
