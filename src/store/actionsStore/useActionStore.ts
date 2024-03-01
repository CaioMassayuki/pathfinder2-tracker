import { defineStore } from "pinia";

const actionsInitialState = [false, false, false];

export const useActionStore = defineStore("actions", {
  state: () => ({
    actions: [...actionsInitialState],
  }),
  getters: {
    actionsLenght(state) {
      state.actions.reduce((acc, action) => {
        return acc + Number(action);
      }, 0);
    },
  },
  actions: {
    toggleAction(index: number) {
      this.actions = this.actions.map((action, i) => {
        if (i === index) {
          return !action;
        }
        return action;
      });
    },
    useActions(uses: number) {
      let countUses = uses;
      this.actions = this.actions.map((action) => {
        if (!action && countUses > 0) {
          --countUses;
          return true;
        }
        return action;
      });
    },
    resetActions() {
      this.actions = [...actionsInitialState];
    },
  },
});
