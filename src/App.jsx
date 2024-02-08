import React, { useState } from "react";
import "./main.scss";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Burger from "./components/Burger";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseWheel = (event) => {
    if (event.deltaY > 0) {
      setIsOpen(true); // если вниз то true
    } else if (event.deltaY < 0) {
      setIsOpen(false); // если вверх то false
    }
  };
  return (
    <div onWheel={handleMouseWheel}>
      <div className={`burger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
      </div>
      <Hero />
      <Burger isOpen={isOpen}>
        <Menu />
      </Burger>
    </div>
  );
}

export default App;
