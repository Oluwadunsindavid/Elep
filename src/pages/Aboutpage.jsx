import React from "react";
import Hero from "../components/AboutComp/Hero";
import History from "../components/AboutComp/History";
import CEO from "../components/HomeComp/CEO"

const Aboutpage = () => {
  return (
    <div className=" max-w-full">
      <Hero />
      {/* <Mission /> */}
      <History/>
      <CEO/>
    </div>
  );
};

export default Aboutpage;
