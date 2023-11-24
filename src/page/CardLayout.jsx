// SharedLayout.jsx
import React from "react";

const CardLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen p-5 flex items-center justify-center">
      <section className="container mx-auto flex flex-col items-center p-5">
        {children}
      </section>
    </div>
  );
};

export default CardLayout;
