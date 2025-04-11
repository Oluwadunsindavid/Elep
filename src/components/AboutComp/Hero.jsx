import React from "react";
import { Link } from "react-router-dom";
import Mission from "../HomeComp/Mission";
import warrantylogo from "../../assets/warrantyLogo.svg";
import insurancelogo from "../../assets/insuranceLogo.svg";
import licensedlogo from "../../assets/licensedLogo.svg";

const Hero = () => {
  const missions = [
    {
      h2: "Who We Are",
      para: "Elephant Solutions was founded in 2014 with a passion for high-quality craftsmanship and a dedication to exceptional service. From humble beginnings in Brantford, our commitment to delivering top-tier services has helped us grow into a trusted name in the industry. Whether it's transforming homes or enhancing commercial spaces, we take pride in every project, large or small.",
    },
    {
      h2: "Our Mission",
      para: "At Elephant Solutions, our mission is to deliver outstanding craftsmanship with a focus on customer satisfaction and quality. We believe in creating lasting relationships with our clients by providing services that are timely, transparent, and tailored to each client's vision. We strive for excellence in everything we do, ensuring each project is completed on time and to the highest standard.",
    },
  ];

  const benefits = [
    {
      icon: warrantylogo,
      tag: "3-Year Warranty",
      details:
        "Our 3-year warranty covers our work, giving you added peace of mind.",
    },
    {
      icon: insurancelogo,
      tag: "$1 Million Insurance",
      details:
        "Our $1 million liability insurance offers full protection for every project.",
    },
    {
      icon: licensedlogo,
      tag: "Licensed And Bonded",
      details:
        "Our team is fully licensed and bonded, meeting all industry standards and regulations.",
    },
  ];

  return (
    <div className=" mt-48 px-6 mb-10 md:mb-24 sm:max-w-[80%] md:max-w-[90%] mx-auto">
      <div className=" mb-10 px-6 md:px-0">
        {/* Home &gt; Portfolio */}
        <Link to="/" className="text-primary text-[16px] font-bold">
          Home &gt;
        </Link>
        <Link to="/aboutpage" className="text-[16px] font-bold ml-1">
          About
        </Link>
      </div>
      {/* <div className="">
        <Mission />
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 sm:mb-6 md:mb-8  sm:mt-20 md:mt-10 lg:mt-5">
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
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-32">
        <div className=" w-full md:max-w-[90%]">
          <h1 className="font-bold text-[28px] mb-8 mt-2">Why Choose Us</h1>
          <p className=" text-[16px] md:text-[20px] font-normal text-justify">
            Choosing us means working with a team committed to quality,
            reliability, and your satisfaction. We bring experience, skill, and
            a focus on your needs to every project. With our proven track record
            and dedication to excellence, you can trust us to deliver results
            you’ll be proud of.
          </p>
        </div>
        <div className=" w-full space-y-4 p-3 lg:p-0">
          {/* {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#E0E9E0] rounded-3xl shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] flex justify-center space-x-2 p-2"
            >
              <div className=" w-20 bg-rd-400 flex items-start justify-center">
                <img src={benefit.icon} className="mx-2 mt-1" alt="" />
              </div>
              <div>
                <h1 className="font-medium text-[20px] md:text-[28px]">
                  {benefit.tag}
                </h1>
                <p className="text-[16px] font-normal md:text-[20px]">
                  {benefit.details}
                </p>
              </div>
            </div>
          ))} */}
          {benefits.map((benefit, index) => {
            const bgColors = ["bg-[#E0E9E0]", "bg-[#F5F4ED]", "bg-[#EBF0F3]"]; // example soft yellow, blue, violet

            return (
              <div
                key={index}
                className={`rounded-3xl shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] flex justify-center space-x-2 p-2 ${bgColors[index]}`}
              >
                <div className="w-20 flex items-start justify-center">
                  <img src={benefit.icon} className="mx-2 mt-1" alt="" />
                </div>
                <div>
                  <h1 className="font-medium text-[20px] md:text-[28px]">
                    {benefit.tag}
                  </h1>
                  <p className="text-[16px] font-normal md:text-[20px]">
                    {benefit.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
