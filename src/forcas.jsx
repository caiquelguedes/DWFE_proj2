import "./Forcas.css";
import {fisico, tiro, raio, luz, gelo, fogo, escuridao, vento  } from "./assets/imagens/index";

const STATUS = new Map([
    [Dem1, "-"],
    [Dem2, "-"],
    [Dem3, "-"],
    [Dem4, "-"],
    [Dem5, "-"],
    [Dem6, "-"],
    [Dem7, "-"],
    [Dem8, "-"],

]);

export default function Status(){
    const name = "Demonee-ho";

    const imageSrc = STATUS.get(name);

    return (
        <div className="imagem">
            <img src={imageSrc} alt={name}></img>
          <div className="Atributo">{name}</div>
          <button> + </button>
          <button> - </button>
        </div>
      );
}