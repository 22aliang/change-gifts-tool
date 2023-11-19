// Card.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (cardContent) => {
    setSelectedCard(cardContent);
    setIsTransitioning(true); // 開始轉場

    setTimeout(() => {
      navigate(`/newpage/${cardContent}`);
    }, 500); // 等待翻轉動畫結束後跳轉
  };

  return (
    <>
      <h1 className="text-2xl text-center mb-5">
        請抽選要準備 <span className="text-red font-bold">__</span> 的 🎁
      </h1>
      <div
        className={`card-container grid grid-cols-3 gap-4 text-center ${
          isTransitioning ? "fade-transition fade-out" : ""
        }`}
      >
        <div
          className={`card ${
            selectedCard === "test" ? "card-selected" : ""
          } w-20 h-32`}
          onClick={() => handleCardClick("test")}
        >
          <div className="card-front"></div>
          <div className="card-back"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
