import React from "react";
import CEOImg from "../../assets/CEOImg.svg";

const CEO = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 md:px-24 lg:px-32">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Meet Our CEO
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-beteen gap-8 md:gap-14">
        {/* Image and Name Section */}
        <div className="flex flex-col items-center text-center">
          {/* Image with Border */}
          {/* <div className=" relative">
            <div className=" w-48 h-48 md:w-56 md:h-56 border-2 border-blue-300 rounded-tr-xl rounded-br-4xl rounded-bl-4xl rounded-tl-4xl overflow-hidden">
              <img
                src={CEOImg} // Replace this URL with the actual image source
                alt="CEO"
                className="w-full h-full object-cover absolute z-10 -top-2"
              />
            </div>
          </div> */}
          <div className="w-52 h-52 flex justify-center items-center mx-auto rounded-full mb-20 border-[#2B7DA0] border-[20px]">
            <img
              src={CEOImg}
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>

          {/* Name and Title */}
          <div className="mt-4">
            <h3 className="text-xl font-bold">Makun</h3>
            <p className="text-black">C.E.O</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-black text-justify leading-relaxed text-lg">
            Rasaki is the CEO of Elephant Company INC, a leading building
            renovation company. With over 20 years of experience in the
            construction industry, Rasaki has built a reputation for his
            expertise in transforming both residential and commercial
            properties. His hands-on approach and keen eye for detail have
            driven the company's success, ensuring projects are completed on
            time, within budget, and to the highest standards. Passionate about
            sustainable design and innovative solutions, John continues to lead
            Elephant Company with a forward-thinking mindset, prioritizing
            quality and client satisfaction in every renovation project.
          </p>
        </div>
      </div>
    </div>
    // <div>
    //   {/* <div className="relative w-40 h-40 bg-red-500 rounded-full flex items-center justify-center">
    //     <div className="bg-lime-400 rounded-full ">
    //       <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white flex items-baseline-last justify-center ">
    //         <img src={CEOImg} className="w-full bg-black rounded-full" alt="" />
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="w-52 h-52 flex justify-center items-center mx-auto rounded-full mb-20 bg-red500 border-[#2B7DA0] border-[20px] relative">
    //     <img
    //       src={CEOImg}
    //       className="w-full h-full object-cover rounded-fulb-4 absolute"
    //       alt=""
    //     />
    //   </div>
    // </div>
  );
};

export default CEO;
