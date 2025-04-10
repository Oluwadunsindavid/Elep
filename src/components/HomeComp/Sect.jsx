import React from "react";
import log1 from "../../assets/Group 1.svg";
import log2 from "../../assets/uis_calendar.svg";
import log3 from "../../assets/satisfaction-icon 1.svg";

const Sect = () => {
  const infos = [
    { id: 1, image: log1, num: "150+", details: "Projects Completed" },
    { id: 2, image: log2, num: "10+", details: "Years of Experience" },
    { id: 3, image: log3, num: "99%", details: "Clients Satisfaction" },
  ];

  return (
    <section className=" bg-[#ecf0f2] p-4 h-80 relative">
      <div className="max-w-[60%] bg-[#1D2123] sm:max-w-[80%] md:max-w-[90%] lg:w-[99%] mx-auto py-8 md:py-4 px-20 rounded-3xl flex flex-col sm:flex-row justify-between items-center absolute top-30 md:top-16 lg:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
        {infos.map((info, index) => (
          <div
            key={index}
            className=" flex flex-col items-center p-4 md:p-7 lg:px-10"
          >
            <img
              src={info.image}
              className="sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              alt=""
            />
            <p className=" font-bold text-[40px] md:text-[50px] lg:text-[64px] text-[#79B9D5]">
              {info.num}
            </p>
            <p className="text-white font-normal text-[20px] text-center ">
              {info.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sect;
