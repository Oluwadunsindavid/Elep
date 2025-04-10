// import React from "react";
// import BGImg from "../assets/background.jpeg"

// const Hero = () => {
//   return (
//     <div
//       className="p-4 relative w-[100%] pb-32 bg-cover bg-no-repeat grid bg-center h-screen "
//       style={{
//         backgroundImage: ` url(${BGImg})`,
//       }}
//     >
// <p className=" text-white font-bold text-[36px] sm:text-5xl md:text-6xl lg:text-7xl text-center pt-14 pb-6 z-1">
//   Home & Commercial Services <br className=" hidden md:block" /> You Can
//   Count On
// </p>
// <p className=" font-normal text-center text-white z-1">
//   We specialize in top-tier home and commercial renovations, painting,
//   <br className=" hidden md:block" /> and contracting services in
//   Brantford and surrounding areas.
// </p>
//       <div className="h-80 w-80 bg-amber-400"></div>
//       <div className="h-80 w-80 bg-amber-400"></div>{" "}
//       <div className="h-80 w-80 bg-amber-400"></div>{" "}
//       <div className="h-80 w-80 bg-amber-400"></div>
//     </div>
//   );
// };

// export default Hero;

// 2ND TRIAL
import React from "react";
import BGImg from "../../assets/Background.jpeg";

const Hero = () => {
  return (
    <div
      className="p-4 relative w-[100%] bg-cover bg-no-repeat grid bg-center h-screen "
      style={{
        backgroundImage: ` url(${BGImg})`,
      }}
      // THE RELATIVE STYLE ABOVE WORKS FOR BOTH THE ABSOLUTE BELOW AND THE ABSOLUTE IN SECT SECTION
    >
      {/* 🔥 Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className=" z-1 pt-52">
        <p className=" text-white font-bold text-[36px] sm:text-5xl md:text-6xl lg:text-7xl text-center pt-6 pb-6 z-1">
          Home & Commercial Services <br className=" hidden md:block" /> You Can
          Count On
        </p>
        <p className=" font-normal text-center text-white z-1">
          We specialize in top-tier home and commercial renovations, painting,
          <br className=" hidden md:block" /> and contracting services in
          Brantford and surrounding areas.
        </p>
      </div>
    </div>
  );
};

export default Hero;
