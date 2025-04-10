import React from "react";

const Transform = () => {
  return (
    <div className="mb-12">
      <div className=" bg-red-60 w-full sm:w-[450px] lg:w-[850px] rounded-3xl bg-white p-4 mx-auto shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)]">
        <p className=" text-center font-bold text-[28px] sm:text-[35px] md:text-[43px] lg:text-[48px]">
          Transform Your Property Today!
        </p>
        <p className="text-center font-normal text-[16px] sm:text-[18px] md:text-[20px]">
          Let Elephant Solutions take care of all your home and business
          improvement needs with expertise you can trust.
        </p>
        <button className=" bg-[#2B7DA0] py-3 rounded-full text-white flex justify-center items-center mx-auto mt-6 text-[16px] md:text-[20px] text-center px-4 2xl:w-[210px]">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Transform;
