import React from "react";
import Emily from "../../assets/Emily.svg";
import Smith from "../../assets/Smith.svg";
import Sarah from "../../assets/Sarah.svg";
import David from "../../assets/David.svg";
import Jessica from "../../assets/Jessica.svg";
import Chris from "../../assets/Chris.svg";

const Testimonials = () => {
  const infos = [
    {
      para: "They built my dream home with precision and flair!",
      img: Emily,
      name: "Emily Johnson",
    },
    {
      para: "A construction company that actually delivers on promises!",
      img: Smith,
      name: "Michael Smith",
    },
    {
      para: "Their team is like a well-oiled machine—impressive!",
      img: Sarah,
      name: "Sarah Brown",
    },
    {
      para: "I never knew construction could be this fun!",
      img: David,
      name: "David Wilson",
    },
    {
      para: "They turned my chaotic ideas into a stunning reality!",
      img: Jessica,
      name: "Jessica Taylor",
    },
    {
      para: "Professional, punctual, and downright awesome!",
      img: Chris,
      name: "Chris Lee",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 text-color relative pb-6 p-4 sm:mb-6 md:mb-8 mt-10 mx-auto max-w-full sm:max-w-[80%] md:max-w-[90%]">
      <h2 className="font-bold text-[28px] sm:text-[38px] md:text-[48px] pt-4 text-center text-black py-6">
        Testimonials
      </h2>
      <div className="grid gap-6 bg-[#ecf0f2] place-items-center md:grid-cols-2 lg:grid-cols-3 w-full">
        {infos.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)] py-4 px-5 w-full"
            //  sm:max-w-[410px]
          >
            <p>{info.para}</p>
            <div className=" flex items-center space-x-3 my-4">
              <div>
                <img src={info.img} alt="" />
              </div>
              <p className=" font-bold">{info.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
