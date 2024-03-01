<script setup lang="ts">
import { ref } from "vue";
import { useCardsStore } from "../store/cardsStore/useCardStore";
import CardOptionsDialog from "./CardOptionsDialog.vue";
import { CardType, Card, CardOptions, CardOptionQuantity, CardOptionsLimit } from "../definitions";
const { optionLimitChange, changeCardTitle, changeCardDescription } = useCardsStore();

const emit = defineEmits(["close-dialog"]);
const props = defineProps<{ type: CardType; card: Card }>();

const isOptionDialogOpen = ref(false);
const hasCardChanges = ref(false);
const cardChanges = ref({ ...props.card });

const handleCloseDetail = () => {
  emit("close-dialog");
};

const handleSaveCardChanges = (type: CardType) => {
  const cardId = props.card.id;
  optionLimitChange(cardId, cardChanges.value.options, type);
  changeCardTitle(cardId, cardChanges.value.title, type);
  changeCardDescription(cardId, cardChanges.value.description, type);
  cardChangeValidation();
};

const cardChangeValidation = () => {
  const cardKeys = Object.keys(cardChanges.value) as Array<keyof Card>;
  hasCardChanges.value = cardKeys.some((key) => {
    if (key === "options") {
      const optionsKeys = Object.keys(cardChanges.value.options) as Array<keyof CardOptions>;
      return optionsKeys.some((key) => {
        return props.card.options[key] !== cardChanges.value.options[key];
      });
    }
    return props.card[key] !== cardChanges.value[key];
  });
};

const handleOptionDialog = (option: boolean) => {
  isOptionDialogOpen.value = option;
};

const handleOptionQuantityChange = (option: CardOptionQuantity) => {
  cardChanges.value.options.quantity = option;
  cardChangeValidation();
};
const handleOptionLimitChange = (option: CardOptionsLimit) => {
  cardChanges.value.options.limit = option;
  cardChangeValidation();
};
const handleCardTitleChange = (text: string) => {
  cardChanges.value.title = text;
  cardChangeValidation();
};
const handleCardDescriptionChange = (text: string) => {
  cardChanges.value.description = text;
  cardChangeValidation();
};
</script>

<template>
  <div class="bg-neutral-950/70 absolute w-full h-full flex justify-center items-center">
    <div
      class="relative bg-neutral-800 w-5/6 h-5/6 border-2 rounded-xl"
      :class="[type === 'resource' ? 'border-blue-500' : 'border-red-500']"
    >
      <div class="p-2 h-full flex flex-col items-start">
        <div class="flex items-center">
          <button class="border mr-2 size-6 rounded-md cursor-pointer" @click="handleCloseDetail">X</button>
          <button v-if="hasCardChanges" class="border border-green-500 px-2 rounded-md cursor-pointer" @click="handleSaveCardChanges(type)">
            Salvar
          </button>
        </div>
        <div
          class="flex items-end w-full mb-2 mt-4 text-2xl border-b-2"
          :class="[type === 'resource' ? 'border-blue-500' : 'border-red-500']"
        >
          <input
            class="w-11/12 p-2 bg-transparent outline-none"
            :value="cardChanges.title"
            @input="handleCardTitleChange(($event.target as HTMLInputElement).value)"
          />
          <div
            class="w-1/12 text-base flex flex-col items-center p-2 border-l-2"
            :class="[type === 'resource' ? 'border-blue-500' : 'border-red-500']"
          >
            <CardOptionsDialog
              :is-open="isOptionDialogOpen"
              :type="props.type"
              :options="cardChanges.options"
              @close-dialog="handleOptionDialog(false)"
              @option-limit-change="handleOptionLimitChange"
              @option-quantity-change="handleOptionQuantityChange"
            >
              <template v-slot:button>
                <button @click="handleOptionDialog(!isOptionDialogOpen)">Opções</button>
              </template>
            </CardOptionsDialog>
          </div>
        </div>
        <textarea
          class="w-full h-full p-2 resize-none bg-transparent outline-none"
          @input="handleCardDescriptionChange(($event.target as HTMLInputElement).value)"
          >{{ cardChanges.description }}</textarea
        >
      </div>
    </div>
  </div>
</template>
