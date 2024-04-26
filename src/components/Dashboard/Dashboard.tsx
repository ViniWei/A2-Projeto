import React, { useState } from 'react';
import Column from '../Column/Column';
import './Dashboard.css';
import { useCardStore, Card } from '@/stores/CardsStore';

const Dashboard: React.FC = () => {
  const { addCard } = useCardStore();
  const [newCardPriority, setNewCardPriority] = useState(0);
  const [newCardName, setNewCardName] = useState("");

  let collumns = [
    "Para fazer",
    "Fazendo",
    "Testando",
    "Completo",
  ];

  function returnCard(index: number){
    let cards = useCardStore((state) => state.cards)
    return cards.filter(card => card.columnIndex == index);
  }

  function sendCardToStore() {
    if (newCardName == ""){
      return;
    }
    setNewCardName("");
    
    let card : Card = {
      id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      name: newCardName,
      priority: newCardPriority,
      columnIndex: 0
    };
    addCard(card);
  }

  return (
    <div>
      <div>
        <input id="card-name-input" type='text' value={newCardName} onChange={(event) => setNewCardName(event.target.value)}/>
        <select id="priority-input" onChange={(event) => setNewCardPriority(Number(event.target.value))}>
          <option value="0">Máxima</option>
          <option value="1">Alta</option>
          <option value="2">Média</option>
          <option value="3">Baixa</option>
        </select>
        <button onClick={sendCardToStore}>Add</button>
      </div>
      <div className="Dashboard">
          {collumns.map((collumn, index) => (
            <Column title={collumn} cards={returnCard(index)}/>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
