import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/workshop.svg";
import img2 from "../../assets/painter.svg";
import img3 from "../../assets/funiture.svg";
import img4 from "../../assets/tiler.svg";
import img5 from "../../assets/electrician.svg";
import img6 from "../../assets/helmet man.svg";
import img7 from "../../assets/kitchen.svg";
import img8 from "../../assets/artists.svg";

const Hero = () => {
  return (
    <div className=" mt-48">
      <div className=" mb-10">
        {/* Home &gt; Portfolio */}
        <Link to="/" className="text-primary text-[16px] font-bold">
          Home &gt;
        </Link>
        <Link to="/portfoliopage" className="text-[16px] font-bold ml-1">
          Portfolio
        </Link>
      </div>

      {/* // <!-- grid --> */}
      <div className="gridd mb-20">
        {/* <!-- grid-1 --> */}
        <div className="grid-1 w-full">
          <img src={img1} alt="" className="rounded-3xl" />
          {/* <img src="images/Rectangle 13.png" alt="" /> */}
        </div>
        <div className="grid-2 w-full">
          <img src={img2} alt="" className="rounded-3xl" />

          {/* <img src="images/Rectangle 14.png" alt="" /> */}
        </div>
        <div className="grid-3 w-full">
          <img src={img3} alt="" className="rounded-3xl" />

          {/* <img src="images/Rectangle 16.png" alt="" /> */}
        </div>
        <div className="grid-4 w-full">
          <img src={img4} alt="" className="rounded-3xl" />

          {/* <img src="images/Rectangle 17.png" alt="" /> */}
        </div>
        <div className="grid-6 w-full">
          <img src={img5} alt="" className="rounded-3xl" />

          {/* <img src="images/Rectangle 19.png" alt="" /> */}
        </div>
        <div className="grid-7 w-full">
          <img src={img6} alt="" className="rounded-3xl" />

          {/* <img src="images/Rectangle 22.png" alt="" /> */}
        </div>
        <div className="grid-5 w-full">
          <img src={img7} alt="" className="rounded-3xl" />

          {/* <img src="images/Rectangle 15.png" alt="" /> */}
        </div>
        <div className="grid-8 w-full">
          <img src={img8} alt="" className="rounded-3xl" />

          {/* <img src="images/Rectangle 20.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
