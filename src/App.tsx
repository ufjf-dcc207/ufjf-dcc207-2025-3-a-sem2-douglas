import { Card } from "./carta.tsx";
import "./arte.css";
import {useState} from "react";

type CardProps = {
  id: number;
  value: string;
  nome: string;
  virada: boolean;
  virarCarta: (id: number) => void;
};

export function Carta({ value, virada, id, virarCarta }: CardProps) {
  return (
    <div 
      className="card" 
      onClick={() => virarCarta(id)} 
      style={{
        cursor: "pointer",
        fontSize: "2rem",
        width: "60px",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "8px",
        backgroundColor: virada ? "#fff" : "#999",
      }}
    >
      {virada ? value : "❓"}
    </div>
  );
}

type CardData = {
  id: number;
  value: string;
  nome: string;
  virada: boolean;
};

const cards: CardData[] = [
  { id: 1, value: "👒", nome: "CHAPEU", virada: true },
  { id: 2, value: "👒", nome: "CHAPEU", virada: true },
  { id: 3, value: "🍖", nome: "CARNE", virada: true },
  { id: 4, value: "🍖", nome: "CARNE", virada: true },
  { id: 5, value: "🐕", nome: "CACHORRO", virada: true },
  { id: 6, value: "🐕", nome: "CACHORRO", virada: true },
  { id: 7, value: "🦁", nome: "LEAO", virada: true },
  { id: 8, value: "🦁", nome: "LEAO", virada: true },
  { id: 9, value: "🕊️", nome: "POMBO", virada: true },
  { id: 10, value: "🕊️", nome: "POMBO", virada: true },
  { id: 11, value: "🐂", nome: "VACA", virada: true },
  { id: 12, value: "🐂", nome: "VACA", virada: true },

];

function embaralha<T>(baralho: T[]): T[] {
  const novoBaralho = [...baralho];
  for (let i = novoBaralho.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [novoBaralho[i], novoBaralho[j]] = [novoBaralho[j], novoBaralho[i]];
  }
  return novoBaralho;
}
function App() {
  const [novoBaralho, setNovoBaralho] = useState<CardData[]>(cards);
  const [jogoComecou, setJogoComecou] = useState(false);
  
  function iniciarJogo(){
      setNovoBaralho(embaralha(cards));
      const cartasViradas = novoBaralho.map(card => ({ ...card, virada: false}));
      setNovoBaralho(cartasViradas);
      setJogoComecou(true);
  }

  return (
    <div className="memoria">
      <h1>🧠 Jogo da Memória</h1>
      <div className="grid">
        {novoBaralho.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
        {!jogoComecou && (
          <button className="botao" onClick={iniciarJogo}>Começar Jogo</button>
        )}
        {jogoComecou && (
          <button className="botao" onClick={iniciarJogo}>REINICIAR JOGO</button>
        )}
      
    </div>
  );
}

export default App;