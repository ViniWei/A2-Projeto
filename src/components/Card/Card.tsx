import React, { ReactNode } from 'react';
import './Card.css'
	
interface params {
  name: string,
  priority: number
}

const Card = (values: params): ReactNode => {
  return (
    <div className="card">
      <div className='content'>
        <p>{values.name}</p>
        <p>{getPriority(values.priority)}</p>
      </div>
        <button className='L'>L</button>
        <button className='R'>R</button>
      <button className='close-card'>X</button>
    </div>
  );

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
    } 
  }
}

export default Card;