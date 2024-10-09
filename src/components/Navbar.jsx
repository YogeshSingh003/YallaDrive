import { useState } from "react";
import LOGO from "../assets/images/Company_Logo.png";
import ARROW from "../assets/icons/right-arrow.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the navbar on click
  };

  return (
    <div>
      <div className="flex  my-5 flex-row justify-between items-center">
        <div className={`w-32 h-full  `}>
          <img src={LOGO} alt="Company Logo" />
        </div>

        <div
          className={`flex flex-col md:flex-row md:items-baseline gap-6 md:gap-20 font-semibold py-3 ${
            isOpen ? "items-end" : " "
          } `}
        >
          <button
            className="md:hidden relative p-2 focus:outline-none"
            onClick={toggleNavbar}
          >
            {isOpen ? "✖" : "☰"}
          </button>
          <div
            className={`flex  md:text-2xl items-center gap-6 md:gap-20 
              ${
                isOpen ? "flex-col md:flex-row  md:gap-20" : " hidden md:flex "
              } `}
          >
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button onClick={() => scrollToSection("faqs")}>FAQ's</button>
          </div>
          <div
            className={`bg-blue-600 opacity-90 text-white font-normal items-center gap-2 py-2 px-4 rounded flex  ${
              isOpen ? "block" : " hidden md:flex"
            }`}
          >
            <img
              className="w-5 h-5 -rotate-45 filter invert"
              src={ARROW}
              alt="Arrow"
            />
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
