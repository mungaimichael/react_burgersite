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
    <div className="meals" id={id}>
      <div className="sectionTitle">
        <h1>{sectionTitle}</h1>
      </div>
      <div className="meal_card_container">
        <div className="meal_card">
          <img src={one} alt="" />
          <div className="prod_des">
            <h2>{title1}</h2>
            <button>buy and taste</button>
          </div>
        </div>
        <div className="meal_card">
          <img src={two} alt="" />
          <div className="prod_des">
            <h2>{title2}</h2>
            <button>buy and taste</button>
          </div>
        </div>
        <div className="meal_card">
          <img src={three} alt="" />
          <div className="prod_des">
            <h2>{title3}</h2>
            <button>buy and taste</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
