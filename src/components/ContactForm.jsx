import Form from "../assets/images/Form.png";

import { useState } from "react";

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "Alexander",
    companyName: "Facebook",
    email: "Smith@gmail.com",
    phoneNo: "+91 ",
    message: "",
  });

  // Function to handle change in data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (send data to backend or validation)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center text-sm items-center py-20 -mx-1 px-1 lg:px-24 md:-mx-4 lg-px-4 lg:-mx-20  bg-black text-white">
      <div className="md:w-[50%]">
        <img src={Form}></img>
      </div>
      {/* Form UI */}
      <form onSubmit={handleSubmit} className=" p-8  rounded md:w-[50%] ">
        <h2 className="text-xl md:text-3xl font-OpenSans font-semibold mb-6">
          Get in touch today
        </h2>
        <div className="border border-gray-700 p-5 rounded ">
          <div className="mb-4  ">
            <label className="">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full   pt-2  placeholder-[#111010]  placeholder-opacity-60  bg-black border-b  border-gray-700  focus:outline-none focus:border-b-2 focus:border-gray-500"
              required
            />
          </div>

          <div className="mb-4">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full   pt-2    placeholder-[#111010]  placeholder-opacity-60 bg-black border-b  border-gray-700 focus:outline-none focus:border-b-2 focus:border-gray-500"
              required
            />
          </div>
          <div className="flex">
            <div className="mb-4">
              <label>Company</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full    pt-2   placeholder-[#111010]  placeholder-opacity-60 bg-black border-b  border-gray-700 focus:outline-none focus:border-b-2 focus:border-gray-500"
              />
            </div>

            <div className="mb-4">
              <label>Contact number</label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                placeholder="Phone no*"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full     pt-2 placeholder-[#111010]  placeholder-opacity-60 bg-black border-b  border-gray-700 focus:outline-none focus:border-b-2 focus:border-gray-500"
                required
              />
            </div>
          </div>
          <div className=" bg-zinc-900 p-2 rounded">
            <label>Describe</label>
            <textarea
              id="message"
              name="message"
              placeholder="Hello, I wanted to inquire about the..."
              value={formData.message}
              onChange={handleChange}
              className="w-full     md:py-1 placeholder-gray-500  placeholder-opacity-60 bg-zinc-900 "
              rows="1"
              required
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="  bg-blue-600 opacity-90 w-24 text-white font-semibold my-10 py-3 px-6 rounded  hover:bg-blue-700 transition-colors">
            <button type="submit" className="">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
