import React from "react";
import ReactDom from "react-dom";

function Header() {
  return (
    <nav className="nav blue lighten-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          el`Cafe
          <i class="material-icons">free_breakfast</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
