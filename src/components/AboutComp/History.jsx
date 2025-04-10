import React from "react";

const History = () => {
  const timelineData = [
    {
      year: "2010",
      title: "The Foundation Of Elephant Company",
      description: "We started as a one man band, CEO Malkom and his toolbox.",
    },
    {
      year: "2013",
      title: "Our First Employee.",
      description:
        "We hired our first helper, and bought a 2006 F150 to help us get around!",
    },
    {
      year: "2017",
      title: "Expansion to Ontario and Beyond",
      description:
        "We started helping families and business all across the country",
    },
    {
      year: "2020",
      title: "Covid 19: Surviving Through a Lockdown",
      description: "How the company managed while on lockdown.",
    },
    {
      year: "2024",
      title: "Present Day: A Year of Growth and Expanded Horizons",
      description:
        "In 2024, we expanded our services and took on more complex projects, strengthening client relationships and enhancing our commitment to quality and excellence. our extensive portfolio to check it out!",
    },
  ];

  return (
    <div className="bg-[#1D2123] mb-10 py-8">
      <h1 className="font-bold text-[28px] text-white text-center pt-2 ">
        Our History
      </h1>
      <h2 className="text-center text-white py-6">
        Growing with Dedication and Excellence
      </h2>
      <div className=" bg-lime-00 text-white space-y6 w-full sm:max-w-[80%] md:max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-wxl mx-auto">
          {timelineData.map((item, index) => (
            // col-span to extend the last div to 2 spaces
            <div
              key={index}
              className={`flex bg[#0C0C0D]/100 bg-white/10 rounded-2xl p-3 sm:p-6 max-w-full items-center mx-auto ${
                index === timelineData.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="text-[#79B9D5] font-medium text-[36px] transform -rotate-90 whitespace-nowrap">
                {item.year}
              </div>
              <div>
                <h3 className="font-medium text-[24px] mb-2">{item.title}</h3>
                <p className="text-sm lg:text-base text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-[#0F151C] text-white px-4 py-16 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="col-span-1 flex bg-[#1C252F] rounded-2xl p-6 gap-6 items-start"
            >
              <div className="text-[#70A6FF] font-bold text-2xl transform -rotate-90 whitespace-nowrap">
                {item.year}
              </div>
              <div>
                <h3 className="font-semibold text-lg lg:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default History;
