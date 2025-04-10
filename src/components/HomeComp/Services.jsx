import React from "react";
import homeReno from "../../assets/Home renovations.svg";
import IntExt from "../../assets/int&ext.svg";
import flooring from "../../assets/flooring.svg";
import ComReno from "../../assets/commercial renovations.svg";
import plastering from "../../assets/plastering.svg";

const Services = () => {
  const images = [
    { img: homeReno, h2: "Home Renovations" },
    { img: IntExt, h2: "Interior & Exterior Painting" },
    { img: flooring, h2: "Flooring Installation" },
    { img: ComReno, h2: "Commercial Renovations" },
    { img: plastering, h2: "Drywall & Plastering" },
  ];

  return (
    <div className="mx-auto max-w-full sm:max-w-[80%] md:max-w-[90%] text-color relative pb-6">
      <div>
        <h2 className="pt-8 text-center font-bold text-[28px] md:text-[48px]">
          Our Services
        </h2>
        {/* Main Container */}
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {/* First Four Images (Two per row) */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
            {images.slice(0, 4).map((image, index) => (
              <div key={index} className="relative group rounded-2xl">
                <img
                  src={image.img}
                  className="w-full h-full object-cover rounded-2xl"
                  alt={image.h2}
                />
                {/* Text content on top of the gradient */}
                <div className="absolute bottom-5 left-5 z-1">
                  <h2 className="text-white font-medium text-[24px] vl:text-[32px]">
                    {image.h2}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Last Image Centered */}
          <div className="w-full flex justify-center mt-4">
            <div className="relative group rounded-2xl md:min-w-sm">
              <img
                src={images[4].img}
                className="w-full h-full object-cover rounded-2xl"
                alt={images[4].h2}
              />
              {/* Text content on top of the gradient */}
              <div className="absolute bottom-5 left-5 z-10">
                <h2 className="text-white font-medium text-[24px] vl:text-[32px]">
                  {images[4].h2}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
