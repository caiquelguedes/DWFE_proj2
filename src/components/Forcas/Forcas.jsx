import React from "react";
import "./Forcas.css";

export default function Forcas({ strengths, weaknesses}) {
  return (
    <div className="atributos">
      <div className="strengths">
        <h3>Forças:</h3>
        <div className="elements">
          {strengths.map((strength) => (
              <span>{   
              strength
               }
               </span>
                
          ))}
        </div>
      </div>
      <div className="weaknesses">
        <h3>Fraquezas:</h3>
        <div className="elements">
          {weaknesses.map((weakness) => (
              <span>
                {
                  weakness
                }
              </span>
          ))}
        </div>
      </div>
      <button>-</button>
      <button>+</button>
    </div>
  );
}
