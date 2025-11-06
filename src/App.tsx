import { Card } from "./carta.tsx";
import "./arte.css";

type CardData = {
  id: number;
  value: string;
  nome:string;
  virada: boolean;
};

const cards: CardData[] = [
  { id: 1, value: "👒", nome:"CHAPEU", virada: true },
  { id: 2, value: "👒", nome:"CHAPEU", virada: false },
  { id: 3, value: "🍖", nome: "CARNE", virada: false },
  { id: 4, value: "🍖", nome: "CARNE", virada: true },
  { id: 5, value: "🐕", nome: "CACHORRO", virada: false },
  { id: 6, value: "🐕", nome: "CACHORRO", virada: true },
  { id: 7, value: "🦁", nome:"LEAO", virada: false },
  { id: 8, value: "🦁", nome: "LEAO", virada: true },
  { id: 9, value: "🕊️", nome:"POMBO", virada: true },
  { id: 10, value: "🕊️", nome:"POMBO", virada: false },
  { id: 11, value: "🐂", nome:"VACA", virada: true },
  { id: 12, value: "🐂", nome:"VACA", virada: false },
  
];

function App() {
  return (
    <div className="memoria">
      <h1>🧠 Jogo da Memória</h1>
      <div className="grid">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;