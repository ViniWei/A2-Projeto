import { create } from 'zustand'

interface CardState {
    cards: Card[],
    addCard: (card: Card) => void
}

interface Card {
    name: string,
    priority: number,
    columnIndex: number 
}

function pushCard(cards: Card[], card: Card){
    let newCards = [...cards];

    newCards.push({
      name: card.name,
      priority: card.priority,
      columnIndex: 0
    });

    return newCards;
}

const useCardStore = create<CardState>((set) => ({
  cards: [
    {
      name: "Testar a função de troca de nome",
      priority: 2,
      columnIndex: 3 
    },
    {
      name: "Implementar local storage",
      priority: 2,
      columnIndex: 1
    },
    {
      name: "Adicionar botão de remover cards",
      priority: 2,
      columnIndex: 1
    },
  ],
  addCard: (card) => set((state) => ({ cards: pushCard(state.cards, card) })),
}))

export {
    useCardStore
}

export type {
    Card
}