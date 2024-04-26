import React, { useEffect, useState } from 'react';
import Column from '../Column/Column';
import './Dashboard.css';
import { useCardStore, Card } from '@/Stores/CardsStore';
import Button from '../Button/Button';
import { ContainerData, ContainerInfoInput, ContentUser, DashboardContent, StyledInput, StyledLabel, StyledSelect } from './style';

const Dashboard: React.FC = () => {
  const { addCard } = useCardStore();
  const [newCardPriority, setNewCardPriority] = useState(0);
  const [newCardName, setNewCardName] = useState("");
  const [user, setUser] = useState<{ nome: string; email: string; bio: string } | null>(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userObj = JSON.parse(userString);
      setUser(userObj);
    }
  }, []);

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
    <div style={{ display: "flex", flexDirection: "column", margin: 0, justifyContent: "center", alignItems: "center" }}>
      <ContainerInfoInput>
      <ContentUser>
        <img style={{borderRadius: "50%", width: "50px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEW/v7////+8vLzDw8Po6Oj29vb6+vrMzMzz8/PU1NTAwMD8/PzIyMjX19fd3d309PTt7e3g4OAycvPjAAAFU0lEQVR4nO2d25arIAyG2wACClTf/2W3tNNVO2NbhQihO9/FzK3/AnMySU8nhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhiwQqf0QxxCVCWet99Zqd/o2nQC9ncaL6rphpuuUMjK47xEJfTDD+S+d1F8hUthxRd0Pw+T62g+YBzhvXuu7Iq1o9yBB2E/6rhp1s+eo5QZ98YWcXJPH2Hu1TeCMsbWfNgEh1+zn62Ns76ZueQOXjLUfeCdizwH+HGNTp+i2v4IPlKv92JsBfUkQONsb3YhJBfcminnL2IjXEBvd4ApS1H74TYRkgedzaMHc6P1m9MGgaz/+Z8ReR/iMIn9PIeeORiR1YyMyBZ7PxL0ipNvROyPtQ8wyMzdoGxuEIyR+iEnx6G86wocIE4JA0uZUpAakzxiyPhFsh6Kw81QPEemSns8TVYUZScUzI9VrqvNC0gcXotYUbL67v9FZmtcUPJLA85moqemxDM2cCNNUiGZoZmNaW8s6yQWoFYU0ixkOy5SSrUhpjLCbtkKcmO3/UDjSLGX8B7f06xV+vy39fn+IGNOE2lpekFvuXiikGZd+f26BVaahmx/i5fiGaI5/6rFMDVFngfBl7Q5RQ3NCi2oU4R4wHJ9PuD0KAka1bSDqK25gXNNLbRHvQLE1dO3MlfxDvNAWCDZbIdV45g7kxjWkv3FfyexVoN2ncCPP2FDNDJdkfeomG5EuSe2fjTTSQws21WUo6nb0Dvg0a0M28V0hSSLtePQ3KY6fcM60wv5v+kNDV/TGzmxYNeDpfwG7CsSyzSHEzcNrqikbswCc3FJBjfPAtR81GbAfNQ6yORPzBIj3Gjvp23wDF4DQ4VXOqIJuIdLegHDTH6MzmMkJmp8JU3E2yBtTsK5v/W6uAQtqPwvDMAzDMEwCtzhGOKdnnHPim9aaRSFzSDpJOZqZi7rMf8fxGp2K9lXe1pgZ1a1V3oZOmXHSp3ZVAuhpdY3Zs87BtLm6rRd6x5KhQerGckWhp71dfGpqKN/XPqnBbZCeZov+L+LLl6LvipnIFxbByczNH5L0Fh4QfytO+zVOZGs4kP7x95dGqkV+tBZhmk3CIPA69SMTtVJ4r/HGSW4YUhsx5wPEGuN+0AU6xzi7CHyB11COikREE/MMkaWfeIsG/kKifQFtBGGd+g3DiGsG1pGVTSriRN5LiVWTqgICZ4kVc6oiAmueYiGBFSUea0WX1NkEgjgy+pka+RToggJrTGEAwobEPQzFY1TE9QLbMIV9RjEz+qCwQU3sVc9hKDlsAohLPrajCr6KFe5opOA9LekJl/hSAh3eMqF9dIXsKcoq3TQK7W4tG8w8U6RSDNiV0T2YAoeIMOmbQ4n4tHS49ow5XB/O2oR0hsOLb5k/fZDP0Yuiax/h8eEp4sayVA7eOFiuNPOaYw/x+xX2BN7Dg8v8eCvLEgUeX3Wrk/3eKZIFQ/Ei1ANTqJ1o308bIlIuyRehxsvYTQWrbT1S99MelC37rbR4cFO6Inwq7fxrfH0q6TZKlkqXEsWmcft8uoobF9795jYaVfuGwIWjr2oXajcN62MbamT9TlPAb7x8YIj88PpR/r/zZCYw0Dq8l6hAalYIIFwww/HhEk6U9EWg9yPaPu8xkJxIiJN4GKmjmSxJfRGII095l7WTXpO7n0+8W0fzmdFrGu7hA8L5FBc5ekfGO3wGTlaqHROWcWithcNbAo8Z4NdKhzgLLINuduI5TqQL7YOU42guSnV3VJzoHkc5xfeuVXUPrqP3vdPaznjv4z+tf2byaz8cLrxEiWEYhmEYhmEYhmGO4x+XEEYrUwlCZQAAAABJRU5ErkJggg==" alt="" />
        <p>{user?.nome}</p>
        <p>{user?.email}</p>
      </ContentUser>
      <ContainerData>
        <StyledLabel>Nome da Tarefa</StyledLabel>
        <StyledInput placeholder='Insira o nome da tarefa' className='styledInput' id="card-name-input" type='text' value={newCardName} onChange={(event) => setNewCardName(event.target.value)}/>
        <StyledLabel>Prioridade da Tarefa</StyledLabel>
        <StyledSelect id="priority-input" onChange={(event) => setNewCardPriority(Number(event.target.value))}>
          <option className='styledOption' value="0">Máxima</option>
          <option className='styledOption' value="1">Alta</option>
          <option className='styledOption' value="2">Média</option>
          <option className='styledOption' value="3">Baixa</option>
        </StyledSelect>
        <Button onClick={sendCardToStore} text='Adicionar'></Button>
      </ContainerData>
      </ContainerInfoInput>
      <DashboardContent>
          {collumns.map((collumn, index) => (
            <Column title={collumn} cards={returnCard(index)}/>
          ))}
      </DashboardContent>
    </div>
  );
}

export default Dashboard;
