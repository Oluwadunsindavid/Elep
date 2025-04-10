import React from "react";
import map from "../../assets/map.svg";
import phone from "../../assets/phone.svg";
import whatsapp from "../../assets/whatsapp.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import time from "../../assets/time.svg";

const details = [
  {
    img: phone,
    para: "Phone:(647) 648-1808",
  },
  {
    img: whatsapp,
    para: "WhatsApp:(647) 648-1808",
  },
  {
    img: email,
    para: "Email: elephant@gmail.com",
  },
  {
    img: location,
    para: "Address: 162 Longboat Run W, Brantford , ON N3T 0R8",
  },
  {
    img: time,
    para: "Working Hours: Mon - Fri: 9am - 5pm",
  },
];

const Contact = () => {
  return (
    <div
      className=" bg-left p-6 bg-cover w-full h-screen"
      style={{ backgroundImage: `url(${map})` }}
    >
      <div className="max-w-[372px] bg-white p-4 md:p-8 rounded-2xl space-y-5 shadow-[0px_4px_4px_-1px_rgba(0,0,0,.2)]">
        <h2 className=" text-[28px] sm:text-[38px] md:text-[48px] text-left font-bold ">
          Contact Us
        </h2>
        {details.map((detail, index) => (
          <div key={index} className=" flex gap-4 items-center">
            <div className=" bg-red-50  ">
              <img src={detail.img} alt="" />
            </div>
            <p className=" md:text-[20px]">{detail.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
