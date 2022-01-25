import React, { useState } from "react";
import Bars from "../NavBurger/Bars.svg";
import Close from "../NavBurger/Close.svg";
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
          <li>super chilli</li>
          <li>super cheesy</li>
          <li>super salads</li>
        </ul>
        <button>buy now</button>
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
        <ul>
          <li>burgers</li>
          <li>salads</li>
          <li>cheesy</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
