import { Carta } from "./carta.tsx";
import "./arte.css";
import {useState} from "react";

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
  const [cartasViradasIds, setCartasViradasIds] = useState<number[]>([])

 function iniciarJogo() {
    const baralhoEmbaralhado = embaralha(cards).map(card => ({ ...card, virada: false }));
    setNovoBaralho(baralhoEmbaralhado);
    setJogoComecou(true);
    setCartasViradasIds([]);
}
  
  function virarCarta(id: number) {
    const cartaClicada = novoBaralho.find(card => card.id === id);
    if (!cartaClicada || cartaClicada.virada){
        return;
    } 
    if (cartasViradasIds.length === 2){
      return;
    } 

    const novoEstado = novoBaralho.map(card =>
      card.id === id ? { ...card, virada: true } : card
    );
    setNovoBaralho(novoEstado);
    const novasViradas = [...cartasViradasIds, id];
    setCartasViradasIds(novasViradas);

    if (novasViradas.length === 2) {
      const [id1, id2] = novasViradas;
      const carta1 = novoEstado.find(card => card.id === id1)!;
      const carta2 = novoEstado.find(card => card.id === id2)!;

      if (carta1.nome !== carta2.nome) {
        setTimeout(() => {
          setNovoBaralho(estadoAtual =>
            estadoAtual.map(card =>
              card.id === id1 || card.id === id2
                ? { ...card, virada: false }
                : card
            )
          );
          setCartasViradasIds([]);
        }, 1000);
      } else {
        setCartasViradasIds([]);
      }
    }
  }

  return (
    <div className="memoria">
      <h1>🧠 Jogo da Memória</h1>
      <div className="grid">
        {novoBaralho.map((card) => (
          <Carta key={card.id} {...card} virarCarta={virarCarta} />
        ))}
      </div>
        <button className="botao" onClick={iniciarJogo}>
            {jogoComecou ? "REINICIAR JOGO" : "INICIAR JOGO"}
        </button>
      
    </div>
  );
}

export default App;