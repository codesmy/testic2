import React from "react";
import Logo from "../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <div className="container">
        <div className="menu-top">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="close"></div>
        </div>
        <div className="menu-body">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Главная
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Каталог
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Проекты
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Контакты
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="menu-bottom">
          <div className="date">2022</div>
          <div className="agency">Разработано onepix</div>
          <div className="copy">все права защищены</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
