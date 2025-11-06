import "./arte.css";

export type CardProps = {
  id: number;
  value: string;
  nome: string;
  virada: boolean;
};

export function Card({ value, nome, virada }: CardProps) {
  return (
    <div className={`card ${virada ? "virada" : ""}`}>
      <div className="card-inner">
        <div className="card-front">❓</div>
        <div className="card-back">
          <span className="emoji">{value}</span>
          <span className="nome">{nome}</span>
        </div>
        
      </div>
    </div>
  );
}

