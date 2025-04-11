import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-40">
      <div className=" mb-10 px-6">
        {/* Home &gt; Portfolio */}
        <Link to="/" className="text-[#2b7da0] text-[16px] font-bold">
          Home &gt;
        </Link>
        <Link to="/warrantypage" className="text-[16px] font-bold ml-1">
          Warranty
        </Link>
      </div>
      <p className="text-center text-5xl md:text-9xl mb-60 mt-40">LOADING...</p>
    </div>
  );
};

export default Hero;
