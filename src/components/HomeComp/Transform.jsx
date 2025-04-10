import React from "react";
import video from "../../assets/Downtown city video - 720.mp4";

const Transform = () => {
  return (
    <div className=" relative pb-72 md:pb-52 3xl:pb-48 bg-rd-500 b-80">
      {/* <div className=" block sm:hidden">
        <img src={img} alt="" />
      </div> */}
      <div className=" w-full h-full">
        <video
          src={video}
          className=" w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>
      {/* <iframe src={video} frameborder="0"></iframe> */}
      <div className=" absolute top-72 md:top-[69%] w-full sm:w-[450px] lg:w-[850px] rounded-3xl bg-white p-4 mx-auto shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className=" text-center font-bold text-[28px] sm:text-[35px] md:text-[43px] lg:text-[48px]">
          Transform Your Property Today!
        </p>
        <p className="text-center font-normal text-[16px] sm:text-[18px] md:text-[20px]">
          Let Elephant Solutions take care of all your home and business
          improvement needs with expertise you can trust.
        </p>
        <button className=" bg-[#2B7DA0] py-3 rounded-full text-white flex justify-center items-center mx-auto mt-6 text-[16px] md:text-[20px] text-center w-[210px]">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Transform;
