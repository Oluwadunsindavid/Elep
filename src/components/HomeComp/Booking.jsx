import React from "react";
import elephant from "../../assets/Elephant.svg";
// import { div } from "motion/react-client";

const Booking = () => {
  return (
    <div className=" bg[#ecf0f2]">
      <div className=" text-color relative pb-6 p-4 sm:mb-6 md:mb-8 ">
        <div className="hidden md:block absolute right-0 w-96 h-96 -z-50">
          <img src={elephant} className=" w-full h-full object-cover opacity-30 rounded-full" alt="" />
        </div>
        <h2 className=" text-center font-bold text-[28px] sm:text-[38px] md:text-[48px] 3xl:bg-ambr-300 sm:mt-10 lg:-mt-20 ">
          Booking
        </h2>
        <form className="space-y-4 max-w-[850px] mx-auto">
          <div className=" pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="mt-4 w-full py-2 border-none bg-white rounded-full px-5 placeholder-black shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="mt-4 w-full py-2 border-none bg-white rounded-full px-5 placeholder-black shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] outline-none"
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="mt-4 w-full py-2 border-none bg-white rounded-full px-5 placeholder-black shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] outline-none"
              />
            </div>

            {/* Services Field */}
            <div>
              <input
                type="text"
                placeholder="Services"
                className="mt-4 w-full py-2 border-none bg-white rounded-full px-5 placeholder-black shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] outline-none"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <textarea
              placeholder="Message"
              className="field mess h-[40px] shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] mt-1 w-full py-2 border-none  outline-none bg-white rounded-full placeholder-black px-5"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[210px] py-3 rounded-full mx-auto flex justify-center items-center bg-[#2B7DA0] text-white"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
// <div className="hidden md:block absolute right-0 w-[30%] rounded-full">
//   <img
//     src={elephant}
//     className=" w-full h-full object-cover rounded-full"
//     alt=""
//   />
// </div>;
