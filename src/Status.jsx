import "./Status.css";
import {  Dem1,Dem2, Dem3,Dem4 } from "./assets/imagens/index";
const STATUS = new Map([
    ["Demonee-ho",Dem1],
    ["Parvati", Dem2],
    ["Cherub", Dem3],
    ["Slenderman", Dem4],

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