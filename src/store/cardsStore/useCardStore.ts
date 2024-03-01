import { defineStore } from "pinia";
import type { Cards, CardType, CardOptions } from "../../definitions";

type TESTE = {
  actionCards: Cards;
  resourceCards: Cards;
};

const DEFAULT_CARDS: TESTE = {
  actionCards: [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      options: {
        limit: "ilimited",
      },
    },
    {
      id: "2",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      options: {
        limit: "ilimited",
      },
    },
  ],
  resourceCards: [
    {
      id: "3",
      title: "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      options: {
        limit: "ilimited",
      },
    },
    {
      id: "4",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
      options: {
        limit: "ilimited",
      },
    },
  ],
};

export const useCardsStore = defineStore("cards", {
  state: () => ({
    cards: { ...DEFAULT_CARDS },
  }),
  getters: {
    getActionCard: (state) => (cardId: string) => state.cards.actionCards.find((card) => card.id === cardId),
    getResourceCard: (state) => (cardId: string) => state.cards.resourceCards.find((card) => card.id === cardId),
  },
  actions: {
    changeCardTitle(id: string, text: string, type: CardType) {
      if (type === "action") {
        const currentCard = this.getActionCard(id);
        if (currentCard) {
          this.cards.actionCards = this.cards.actionCards.map((card) => {
            if (card.id === id) {
              return { ...currentCard, title: text };
            }
            return card;
          });
        }
      } else {
        const currentCard = this.getResourceCard(id);
        if (currentCard) {
          this.cards.resourceCards = this.cards.resourceCards.map((card) => {
            if (card.id === id) {
              return { ...currentCard, title: text };
            }
            return card;
          });
        }
      }
    },
    changeCardDescription(id: string, text: string, type: CardType) {
      if (type === "action") {
        const currentCard = this.getActionCard(id);
        if (currentCard) {
          this.cards.actionCards = this.cards.actionCards.map((card) => {
            if (card.id === id) {
              return { ...currentCard, description: text };
            }
            return card;
          });
        }
      } else {
        const currentCard = this.getResourceCard(id);
        if (currentCard) {
          this.cards.resourceCards = this.cards.resourceCards.map((card) => {
            if (card.id === id) {
              return { ...currentCard, description: text };
            }
            return card;
          });
        }
      }
    },
    optionLimitChange(id: string, options: CardOptions, type: CardType) {
      if (type === "action") {
        const currentCard = this.getActionCard(id);
        const updatedCard = currentCard
          ? {
              ...currentCard,
              options,
            }
          : null;

        if (updatedCard) {
          this.cards.actionCards = this.cards.actionCards.map((card) => {
            if (card.id === id) {
              return updatedCard;
            }
            return card;
          });
        }
      } else {
        const currentCard = this.getResourceCard(id);
        const updatedCard = currentCard
          ? {
              ...currentCard,
              options,
            }
          : null;

        if (updatedCard) {
          this.cards.resourceCards = this.cards.resourceCards.map((card) => {
            if (card.id === id) {
              return updatedCard;
            }
            return card;
          });
        }
      }
    },
  },
});
