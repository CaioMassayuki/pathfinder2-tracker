<script setup lang="ts">
import Dialog from "./design/Dialog.vue";

interface DialogProps {
  isOpen: boolean;
  type: CardType;
  options: CardOptions;
}

const props = defineProps<DialogProps>();
const emit = defineEmits(["close-dialog", "option-limit-change"]);

function handleClose() {
  emit("close-dialog", false);
}

function handleLimitChange(limitType: string) {
  emit("option-limit-change", limitType);
}
</script>

<template>
  <Dialog :is-open="props.isOpen">
    <div tabindex="1" class="flex flex-col absolute w-64 right-2 top-20 border rounded-md p-2" @blur="handleClose">
      <div class="w-full flex flex-col justify-between">
        <h3>Limite de Usos</h3>
        <label class="flex"><input @change="handleLimitChange('rest')" type="radio" :name="`${type}-option`" :checked="options.limit === 'rest'" />Por Descanso</label>
        <label class="flex"><input @change="handleLimitChange('ilimited')" type="radio" :name="`${type}-option`" :checked="options.limit === 'ilimited'" />Ilimitado</label>
        <label class="flex"><input @change="handleLimitChange('resource')" type="radio" :name="`${type}-option`" :checked="options.limit === 'resource'" />Limitado Por</label>
      </div>
      <div v-if="options.limit === 'rest'" class="flex items-center">
        <p>Quantidade:</p>
        <input class="w-16 border-b px-1 text-lg text-center bg-transparent outline-none" type="number" />
        /
        <input class="w-16 border-b px-1 text-lg text-center bg-transparent outline-none" type="number" placeholder="Max" />
      </div>
    </div>
  </Dialog>
</template>
