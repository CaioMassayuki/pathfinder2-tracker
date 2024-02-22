import { defineStore } from 'pinia'

type TESTE = {
    actionCards: Cards;
    itemCards: Cards;
  };
  
  const DEFAULT_CARDS: TESTE = {
    actionCards: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor sit",
        description:
          "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
        quantity: "1",
        options: {
          limit: "ilimited",
        },
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
        quantity: "1000",
        options: {
          limit: "ilimited",
        },
      },
    ],
    itemCards: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor sit",
        description:
          "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
        quantity: "1",
        options: {
          limit: "ilimited",
        },
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor Lorem ipsum dolor sit amet, consectetur o eiusmodLorem ipsum dolor",
        quantity: "1000",
        options: {
          limit: "ilimited",
        },
      },
    ],
  };

export const useCardsStore = defineStore('cards', {
    state: () => ({
        cards: DEFAULT_CARDS,
    })
})