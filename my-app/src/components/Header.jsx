import React from "react";
import logo from "../logos/Asset 16@4x.png";

export default function Header() {
  return (
      <>
        <header>
          <img src={logo} alt=""/>
        </header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Book</a>
            </li>
          </ul>
        </nav>
      </>
  );
}
