<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Dialog from "./design/Dialog.vue";

interface DialogProps {
  isOpen: boolean;
  type: CardType;
  options: CardOptions;
}

const emit = defineEmits(["close-dialog", "option-limit-change", "option-quantity-change"]);
const props = defineProps<DialogProps>();
const dialogRef = ref<null | HTMLElement>(null);

function handleClose(event: MouseEvent) {
  const el = event.target as HTMLElement;
  if (dialogRef.value && !dialogRef.value.contains(el)) {
    emit("close-dialog", false);
  }
}

function handleLimitChange(limitType: CardOptionsLimit) {
  emit("option-limit-change", limitType);
}

function handleQuantityChange(type: "max" | "cur", quantity: string) {
  const newQuantity = type === "cur" ? { ...props.options.quantity, current: quantity } : { ...props.options.quantity, max: quantity };
  console.log(newQuantity);
  emit("option-quantity-change", newQuantity);
}

onMounted(() => {
  document.addEventListener("click", handleClose);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClose);
});
</script>

<template>
  <div ref="dialogRef">
    <div>
      <slot name="button"></slot>
    </div>
    <Dialog :is-open="props.isOpen" class="w-60 right-2 top-28 bg-neutral-800">
      <div class="flex flex-col border rounded-md p-2">
        <div class="w-full flex flex-col justify-between">
          <h3>Limite de Usos</h3>
          <label class="flex"
            ><input @change="handleLimitChange('rest')" type="radio" :name="`${type}-option`" :checked="options.limit === 'rest'" />Por
            Descanso</label
          >
          <label class="flex"
            ><input
              @change="handleLimitChange('ilimited')"
              type="radio"
              :name="`${type}-option`"
              :checked="options.limit === 'ilimited'"
            />Ilimitado</label
          >
          <label class="flex"
            ><input
              @change="handleLimitChange('resource')"
              type="radio"
              :name="`${type}-option`"
              :checked="options.limit === 'resource'"
            />Limitado Por</label
          >
        </div>
        <div v-if="options.limit === 'rest'" class="flex items-center">
          <p>Quantidade:</p>
          <input
            class="w-16 border-b px-1 text-lg text-center bg-transparent outline-none"
            type="number"
            :value="props.options.quantity?.current"
            @change="handleQuantityChange('cur', ($event.target as HTMLInputElement).value)"
          />
          /
          <input
            class="w-16 border-b px-1 text-lg text-center bg-transparent outline-none"
            type="number"
            placeholder="Max"
            :value="props.options.quantity?.max"
            @change="handleQuantityChange('max', ($event.target as HTMLInputElement).value)"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>
