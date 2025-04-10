// src/components/HomePage.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // For dropdown arrows
import woman from "../../assets/woman-smiles-with-question-mark 1.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // List of questions
  const questions = [
    "What is included in a basement renovation?",
    "How long does a basement renovation take?",
    "Do I need a permit for a basement renovation?",
    "Can I make my basement a legal apartment?",
    "Can I still use my basement during renovation?",
  ];

  return (
    <div className="min-h-screen mt-48 flex flex-col px-4">
      <div className=" mb-10 px-6 md:px-0">
        {/* Home &gt; Portfolio */}
        <Link to="/" className="text-[#2b7da0] text-[16px] font-bold">
          Home &gt;
        </Link>
        <Link to="/faqspage" className="text-[16px] font-bold ml-1">
          FAQs
        </Link>
      </div>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-left">
        Curious Minds Want to Know
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-8">
        {/* Left Section: Categories and Questions */}
        <div className="flex-1">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="flex items-center px-4 py-2 bg-[#2b7da0] text-white rounded-full text-sm md:text-base">
              <span className="mr-2">🏠</span> Basement Renovation
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm md:text-base">
              <span className="mr-2">⚖️</span> Legal Basement
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm md:text-base">
              <span className="mr-2">🎨</span> Design & Customization
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm md:text-base">
              <span className="mr-2">🛠️</span> Construction & Materials
            </button>
          </div>

          {/* Questions with Dropdowns */}
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className="bg-white rounded-full shadow-md p-4 cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-medium text-gray-800">
                    {question}
                  </h3>
                  <FaChevronDown
                    className={`text-gray-600 transform transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {/* Dropdown Content */}
                {openDropdown === index && (
                  <div className="mt-3 text-gray-600">
                    <p>Yes</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={woman}
            // src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            alt="Person with question mark sign"
            className="w-full max-w-sm h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
