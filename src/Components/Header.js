import React, { useState } from "react";
import Bars from "../NavBurger/Bars.svg";
import Close from "../NavBurger/Close.svg";
import DeskNav from "./DeskNav";
const Header = () => {
  const [showMobile, setShowMobile] = useState(false);

  const [showBurgerIcon, setshowBurgerIcon] = useState(false);

  const handleBurgerIcon = () => {
    if (window.innerWidth <= 960) {
      setshowBurgerIcon(true);
    } else {
      setshowBurgerIcon(false);
    }
    console.log(showBurgerIcon);
  };

  // invoke burger function on resize
  window.addEventListener("resize", handleBurgerIcon);

  const handleShowMobile = () => {
    setShowMobile(!showMobile);
  };

  return (
    <header>
      <h1 className={`${showMobile ? "burger_open" : ""}`}>
        crazy <br />
        burgers{" "}
      </h1>
      <nav className={`${showMobile ? "show" : ""}`}>
        <ul>
          <li>super burgers</li>
          <li>super salads</li>
          <li>
            <button>buy now</button>
          </li>
        </ul>
      </nav>
      {showBurgerIcon ? (
        <div
          className={`burger ${showMobile ? "open" : ""}`}
          onClick={handleShowMobile}
        >
          <img src={Bars} id="bars" alt="" />
          <img src={Close} id="close" alt="" />
        </div>
      ) : (
        <DeskNav />
      )}
    </header>
  );
};

export default Header;
