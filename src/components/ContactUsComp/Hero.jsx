import React from "react";
import Contact from "../../components/HomeComp/Contact";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-40">
      <div className=" mb-10 px-6">
        {/* Home &gt; Portfolio */}
        <Link to="/" className="text-[#2b7da0] text-[16px] font-bold">
          Home &gt;
        </Link>
        <Link to="/contactUspage" className="text-[16px] font-bold ml-1">
          Contact
        </Link>
      </div>
      <Contact />
    </div>
  );
};

export default Hero;
