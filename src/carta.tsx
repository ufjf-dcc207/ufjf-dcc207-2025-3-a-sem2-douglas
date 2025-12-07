import "./arte.css";

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
      onClick={() => virarCarta(id)}>{virada ? value : "❓"}
    </div>
  );
}

