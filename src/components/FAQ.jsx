import React, { useState } from "react";
import GetInTouch from "./GetInTouch";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How Do I Book A Ride With Yalla Drive?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar porttitor diam id mollis. Ut varius tristique nisi sit amet dictum. Fusce lobortis urna justo, ut fringilla nisl pellentesque eu.",
    },
    {
      id: 2,
      question:
        "What information do I need to provide during the sign-up process?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar porttitor diam id mollis. Ut varius tristique nisi sit amet dictum. Fusce lobortis urna justo, ut fringilla nisl pellentesque eu.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="bg-black text-white py-5 -mx-1 px-1 lg:px-24 md:-mx-4 lg-px-4 lg:-mx-20"
      id="faqs"
    >
      <div className="flex  flex-col md:flex-row my-20 gap-5">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:w-[60%]">
          Frequently Asked Questions
        </h1>
        <div className="md:text-lg lg:text-xl md:w-[40%]">
          <hr className=" border-2 mb-2 border-blue-500 w-full" />
          <p>
            Everything you need to know about us. Can't find the answer you are
            looking for? Get in touch.
          </p>
        </div>
      </div>
      <div className=" my-12  ">
        <div className="">
          {/* Map function*/}
          {faqData.map((obj, index) => (
            <div key={obj.id}>
              <hr />
              <div className="font-OpenSans text-base md:text-xl font-normal py-3 md:py-6 w-full ">
                <span>
                  <button
                    className={`h-3 w-4 mr-5 transition-transform duration-200 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
                    onClick={() => handleAccordionClick(index)}
                  >
                    ➕
                  </button>
                </span>
                <span className="text-2xl ">{obj.question}</span>
                {index === activeIndex && (
                  <div className="py-4">{obj.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-t w-full from-black"></div>
      <GetInTouch />
    </div>
  );
};

export default FAQ;
