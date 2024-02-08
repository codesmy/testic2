import React from "react";

const Burger = ({ children, isOpen }) => {
  
  return (
    <>
      <div className={`burger-menu ${isOpen ? "active" : ""}`}>{children}</div>
    </>
  );
};

export default Burger;
