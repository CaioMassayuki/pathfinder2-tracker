export type CardOptionsLimit = "rest" | "ilimited" | "resource";

export type CardOptionQuantity = {
  current: number,
  max: number,
}

export type DialogState = {
  isOpen: boolean;
  card: Card | null;
};

export type CardOptions = {
  limit: CardOptionsLimit;
  quantity?: CardOptionQuantity;
};

export type Card = {
  id: string;
  title: string;
  description: string;
  options: CardOptions;
};

export type Cards = Card[];

export type CardType = "action" | "resource";
