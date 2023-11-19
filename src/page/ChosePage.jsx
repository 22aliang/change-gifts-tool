// YourNewPage.js
import React from "react";
import { useParams } from "react-router-dom";

function ChosePage() {
  const { cardContent } = useParams();

  return (
    <div>
      <h1 className="text-6xl text-center">
        你要幫 <span className="text-red font-bold">{cardContent}</span>{" "}
        準備禮物
      </h1>
    </div>
  );
}

export default ChosePage;
