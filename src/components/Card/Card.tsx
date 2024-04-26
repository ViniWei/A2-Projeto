// Card.tsx
import React, { ReactNode } from 'react';
import './Card.css';
import { useCardStore, Card } from '@/Stores/CardsStore';

interface CardProps {
  id: number,
  name: string,
  priority: number
}

const CardComponent: React.FC<CardProps> = ({ id, name, priority }) => {
  const { deleteCard, moveCard } = useCardStore();

  const left = () => {
    moveCard(id, -1); 
  };

  const right = () => {
    moveCard(id, 1); 
  };

  return (
    <div className="card">
      <div className='content'>
        <p>{name}</p>
        <p>{getPriority(priority)}</p>
      </div>
      <button className='L' onClick={left}>L</button>
      <button className='R' onClick={right}>R</button>
      <button className='close-card' onClick={() => deleteCard(id)}>x</button>
    </div>
  );
};

function getPriority(priority: number){
  switch (priority) {
    case 0:
      return "Máxima";
    case 1:
      return "Alta";
    case 2:
      return "Média";
    case 3:
      return "Baixa";
    default:
      return "Desconhecida";
  } 
}

export default CardComponent;
