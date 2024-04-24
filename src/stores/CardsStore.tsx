import { create } from 'zustand'

interface CardState {
  cards: Card[],
  addCard: (card: Card) => void
  deleteCard: (cardId: number) => void
}

interface Card {
  id: number,
  name: string,
  priority: number,
  columnIndex: number
}

function pushCard(cards: Card[], card: Card) {
  let newCards = [...cards];

  newCards.push({
    id: card.id,
    name: card.name,
    priority: card.priority,
    columnIndex: 0
  });

  return newCards;
}

const useCardStore = create<CardState>((set) => ({
  cards: [
    {
      id: 4893248230,
      name: "Testar a função de troca de nome",
      priority: 2,
      columnIndex: 3
    },
    {
      id: 1078347232,
      name: "Implementar local storage",
      priority: 2,
      columnIndex: 1
    },
    {
      id: 9875563211,
      name: "Adicionar botão de remover cards",
      priority: 2,
      columnIndex: 1
    },
  ],
  addCard: (card) => set((state) => ({ cards: pushCard(state.cards, card) })),
  deleteCard: (cardId) => set((state) => ({ cards: state.cards.filter((card) => card.id != cardId)}))
}))

export {
  useCardStore
}

export type {
  Card
}