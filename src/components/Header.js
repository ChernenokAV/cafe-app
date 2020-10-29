import React, { useState } from "react";
import ReactDom, { createPortal } from "react-dom";

function Header() {
  return (
    <nav className="nav teal lighten-2">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Coffe&Tea
            <i class="material-icons">free_breakfast</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Войти</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
