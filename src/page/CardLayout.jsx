// SharedLayout.jsx
import React from "react";

const CardLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen p-0 flex items-center justify-center">
      <section className="container mx-auto flex flex-col items-center">
        {children}
      </section>
    </div>
  );
};

export default CardLayout;
