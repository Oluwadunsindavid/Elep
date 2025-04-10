import React from "react";

const missions = [
  {
    h2: "Who We Are",
    para: "Elephant Solutions was founded in 2014 with a passion for high-quality craftsmanship and a dedication to exceptional service. From humble beginnings in Brantford, our commitment to delivering top-tier services has helped us grow into a trusted name in the industry. Whether it's transforming homes or enhancing commercial spaces, we take pride in every project, large or small.",
  },
  {
    h2: "Our Mission",
    para: "      At Elephant Solutions, our mission is to deliver outstanding craftsmanship with a focus on customer satisfaction and quality. We believe in creating lasting relationships with our clients by providing services that are timely, transparent, and tailored to each client's vision. We strive for excellence in everything we do, ensuring each project is completed on time and to the highest standard.",
  },
];

const Mission = () => {
  return (
    <div className="p-4 grid gap-6 bg-[#ecf0f2] place-items-center md:grid-cols-2 sm:mb-6 md:mb-8 max-w-full sm:max-w-[80%] md:max-w-[90%] mx-auto mt-40 sm:mt-20 md:mt-10 lg:mt-5">
      {missions.map((mission, index) => (
        <div
          key={index}
          className=" text-justify bg-white rounded-3xl shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] p-8 max-w-[400px] lg:max-w-[628px]"
        >
          <h2 className=" font-bold text-[28px] mb-4">{mission.h2}</h2>
          <p className=" font-normal text-[16px]">{mission.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Mission;