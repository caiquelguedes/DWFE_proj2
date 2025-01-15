import "./Status.css";
import { Dem1, Dem2, Dem3,Dem4 } from "./assets/imagens";

const STATUS = new Map([
    ["Demonee-ho",Dem1],
    ["Parvati", Dem2],
    ["Cherub", Dem3],
    ["Slenderman", Dem4],

]);

export default function Status(){
    const name = "Demonee-ho";

    const imageSrc = STATUS.get(Dem1);

    return (
        <div className="imagem">
            <img src={imageSrc} alt={name}></img>
          <div className="Atributo">{Dem1}</div>
        </div>
      );
}