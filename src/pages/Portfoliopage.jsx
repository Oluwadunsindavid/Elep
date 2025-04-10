import React from "react";
import Hero from "../components/PortfolioComp/Hero";
// import Transform from "../components/HomeComp/Transform";
import Transform from "../components/PortfolioComp/Transform";

const Portfoliopage = () => {
  return (
    <div className="max-w-full sm:max-w-[80%] md:max-w-[90%] mx-auto">
      <Hero />
      <Transform/>
      {/* <Transform/> */}
    </div>
  );
};

export default Portfoliopage;
