import React from 'react';
import Card from '../Card/Card';
import './Column.css';

interface ColumnProps {
  title: string;
  cards: { id: number, name: string; priority: number }[];
}

const Column: React.FC<ColumnProps> = ({ title, cards }) => {
  return (
    <div className="column">
      <h2 className='title'>{title}</h2>
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} id={card.id} name={card.name} priority={card.priority} />
        ))}
      </div>
    </div>
  );
}

export default Column;