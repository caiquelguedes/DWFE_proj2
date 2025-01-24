import React from "react";
import "./Forcas.css";

export default function Forcas({ strengths, weaknesses, onNext, onPrevious }) {
  return (
    <div className="atributos">
      <div className="strengths">
        <h3>Forças:</h3>
        <div className="elements">
          {strengths.map((strength) => (
            <button
              key={strength}
              onClick={onNext}
              className="element-button"
              title={`Próximo (Força: ${strength})`}
            >
              <img
                src={strength}
                alt={strength}
                className="element-icon"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="weaknesses">
        <h3>Fraquezas:</h3>
        <div className="elements">
          {weaknesses.map((weakness) => (
            <button
              key={weakness}
              onClick={onPrevious}
              className="element-button"
              title={`Anterior (Fraqueza: ${weakness})`}
            >
              <img
                src={weakness}
                alt={weakness}
                className="element-icon"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
