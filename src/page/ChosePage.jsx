// YourNewPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ChosePage() {
  const { cardContent } = useParams();

  useEffect(() => {
    localStorage.setItem("isPageLocked", "true");
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center">
        恭喜🎉 你要幫 <span className="text-red font-bold">{cardContent}</span>{" "}
        準備 🎁 喔 ! 🥰
      </h1>
    </div>
  );
}

export default ChosePage;
