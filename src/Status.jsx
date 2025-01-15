import "./Status.css";
import { Dem1, Dem2, Dem3,Dem4 } from "./assets";

const STATUS = new Map([
    ["Demonee-ho",Dem1],
    ["Parvati", Dem2],
    ["Cherub", Dem3],
    ["Slenderman", Dem4],

])

export default function Status(){
    return (
        <div className="imagem">
          <div className="STATUS">{STATUS}</div>
        </div>
      );
}