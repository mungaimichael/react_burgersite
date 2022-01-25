import React from "react";
import Meals from "./Meals";
import one from "./media/salads/one.jpg";
import two from "./media/salads/two.jpg";
import three from "./media/salads/three.jpg";
const Salads = () => {
  return (
    <Meals
      id="salads"
      one={one}
      two={two}
      three={three}
      title1="ceasar salad"
      title2="greece salad"
      title3="tomato salad"
      sectionTitle="oh, salads"
    />
  );
};

export default Salads;
