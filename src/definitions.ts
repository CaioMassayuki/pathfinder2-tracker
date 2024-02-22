type CardOptions = {
  limit: 'rest' | 'ilimited' | 'resource';
  quantity?: number
}

type Card = {
  title: string;
  description: string;
  quantity: string;
  options: CardOptions;
};

type Cards = Card[];

type CardType = "action" | "resource";
