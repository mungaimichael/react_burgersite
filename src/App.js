import React from "react";
import Meals from "./Components/Meals";
import Hero from "./Components/Hero";
import one from "./Components/media/burgers/one.jpg";
import two from "./Components/media/burgers/two.jpg";
import three from "./Components/media/burgers/three.jpg";
import Salads from "./Components/Salads";

const App = () => {
  return (
    <>
      <Hero />
      <Meals
        one={one}
        two={two}
        three={three}
        title1="meaty king"
        title2="chillybilly"
        title3="regular one"
        sectionTitle="must be the burger"
        id="burgers"
      />
      <Salads />
    </>
  );
};

export default App;
