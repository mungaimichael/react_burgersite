import React from "react";

const Meals = ({
  one,
  two,
  three,
  title1,
  title2,
  title3,
  sectionTitle,
  id,
}) => {
  return (
    <div className="burger_meals" id={id}>
      <h1>{sectionTitle}</h1>
      <div className="meals">
        <div className="one">
          <img src={one} alt="" />
          <h2>{title1}</h2>
        </div>
        <div className="two">
          <img src={two} alt="" />
          <h2>{title2}</h2>
        </div>
        <div className="three">
          <img src={three} alt="" />
          <h2>{title3}</h2>
        </div>
      </div>
    </div>
  );
};

export default Meals;
