import React, { useState } from 'react';
import Column from '../Column/Column';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [cards, setCards] = useState([
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
  ]);

  const [newCardPriority, setNewCardPriority] = useState(0);
  const [newCardName, setNewCardName] = useState("");

  let collumns = [
    "To do",
    "Doing",
    "To review",
    "Done",
  ];

  function returnCard(index: number){
    return cards.filter(card => card.columnIndex == index);
  }

  function addCard() {
    let newCards = [...cards];

    newCards.push({
      name: newCardName,
      priority: newCardPriority,
      columnIndex: 0
    });

    setCards(newCards);
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
        <button onClick={addCard}>Add</button>
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
