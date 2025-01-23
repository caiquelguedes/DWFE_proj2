import React, { useState } from "react";
import Forcas from "./Forcas";
import { Dem1, Dem2, Dem3, Dem4 } from "../assets/imagens/index";

const DEMONS = [
  {
    name: "Demonee-ho",
    image: Dem1,
    strengths: ["Fogo"],
    weaknesses: ["Gelo"],
  },
  {
    name: "Parvati",
    image: Dem2,
    strengths: ["Luz"],
    weaknesses: ["Escuridão"],
  },
  {
    name: "Cherub",
    image: Dem3,
    strengths: ["Raio"],
    weaknesses: ["Vento"],
  },
  {
    name: "Slenderman",
    image: Dem4,
    strengths: ["Tiro"],
    weaknesses: ["Físico"],
  },
];

export default function Status() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentDemon = DEMONS[currentIndex];

  );
}
