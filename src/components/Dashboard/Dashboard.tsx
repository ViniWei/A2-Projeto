import React from 'react';
import Column from '../Column/Column';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <Column title="To do" cards={[{ name: "Card 1", priority: 1 },{ name: "Card 1", priority: 1 }, { name: "Card 2", priority: 2 }, { name: "Card 3", priority: 3 }]} />
      <Column title="Doing" cards={[{ name: "Card 4", priority: 1 }, { name: "Card 5", priority: 2 }]} />
      <Column title="To Review" cards={[{ name: "Card 4", priority: 1 }]} />
      <Column title="Done" cards={[{ name: "Card 6", priority: 1 }]} />
    </div>
  );
}

export default Dashboard;
