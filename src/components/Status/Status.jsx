import React, { useState } from "react";
import Forcas from "../Forcas/Forcas.jsx";
import "./Status.css";
import { Dem1, Dem2, Dem3, Dem4 } from "../../assets/imagens/index";

const DEMONS = [
  {
    name: "Demonee-ho",
    image: Dem1,
    strengths: ["Físico", "Tiro", "Fogo"],
    weaknesses: [" "],
  },
  {
    name: "Parvati",
    image: Dem2,
    strengths: ["Luz"],
    weaknesses: [" "],
  },
  {
    name: "Seraph",
    image: Dem3,
    strengths: ["Escuridão", "Luz", "Fogo", "Tiro", "Físico"],
    weaknesses: ["Vento"],
  },
  {
    name: "Slenderman",
    image: Dem4,
    strengths: ["escuridão"],
    weaknesses: ["tiro"],
  },
];

export default function Status() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentDemon = DEMONS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DEMONS.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? DEMONS.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="status">
      <div className="demon-container">
        <img src={currentDemon.image} alt={currentDemon.name} />
        <h2>{currentDemon.name}</h2>
      </div>
      <Forcas
        strengths={currentDemon.strengths}
        weaknesses={currentDemon.weaknesses}
        onNext={handleNext}
        onPrevious={handlePrevious}
      /> 
    </div>
  );
}
