import React, { useState } from "react";
import Forcas from "../../Forcas.jsx";
import "./Status.css";
import { Dem1, Dem2, Dem3, Dem4 } from "../../assets/imagens/index";

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
      {/* <Forcas
        strengths={currentDemon.strengths}
        weaknesses={currentDemon.weaknesses}
        onNext={handleNext}
        onPrevious={handlePrevious}
      /> */}
    </div>
  );
}
