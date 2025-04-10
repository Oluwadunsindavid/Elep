import React from "react";
import opensea from "../../assets/OpenSea logo.svg";
import skrill from "../../assets/Skrill.svg";
import klarna from "../../assets/klarna.svg";
import discover from "../../assets/Discover.svg";
import square from "../../assets/Square.svg";

const Partners = () => {
  return (
    <div className=" bg-[#1D2123] px-4 sm:px-8 md:px-16 text-color relative pb-6 mt-10">
      <h2 className=" font-bold text-[28px] sm:text-[38px] md:text-[48px] pt-4 text-center text-white py-6 ">
        Our Trusted Partners
      </h2>
      <div className=" grid grid-cols-3 sm:grid-cols-5 xl:mx-24 gap-4">
        <div className=" w-16 2xl:w-24 sm:w-28 lg:w-[180px]">
          <img src={opensea} className=" w-full h-full object-cover" alt="" />
        </div>
        <div className=" w-16 2xl:w-24 sm:w-28 lg:w-[180px]">
          <img src={skrill} className=" w-full h-full object-cover" alt="" />
        </div>
        <div className=" w-16 2xl:w-24 sm:w-28 lg:w-[180px]">
          <img src={klarna} className=" w-full h-full object-cover" alt="" />
        </div>
        <div className=" w-16 2xl:w-24 sm:w-28 lg:w-[180px]">
          <img src={discover} className=" w-full h-full object-cover" alt="" />
        </div>
        <div className=" w-16 2xl:w-24 sm:hidden"></div>
        <div className=" w-16 2xl:w-24 sm:w-28 lg:w-[180px]">
          <img src={square} className=" w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
