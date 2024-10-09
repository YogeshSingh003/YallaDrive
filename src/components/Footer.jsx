const Footer = () => {
  return (
    <div className="bg-black text-white -mx-1 md:px-4 lg:-mx-20 md:-mx-4 lg:px-32 lg:-mb-24 pb-1">
      <div className="flex  mx-0 flex-col md:flex-row   items-center   md:items-start justify-between ">
        <div className="w-[60%] md:w-[40%]">
          <div className="  text-sm flex md:items-start flex-col gap-5 md:gap-10 pb-10">
            <h1 className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <h2>
              We've created the product that will help your startup to look even
              better
            </h2>
            <div className="flex gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="bg-black border border-gray-800 rounded px-4 placeholder-slate-700"
              ></input>
              <div className="bg-blue-600 opacity-90 text-white font-normal  px-4 py-1 rounded ">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-[50%] px-2">
          <div>
            <h1 className=" font-bold ">About</h1>
            <div className="flex flex-col items-start     font-normal mb-5 md:mb-0">
              <button className="md:mt-6">Education</button>
              <button className="md:mt-6">Teelematics</button>
              <button className="md:mt-6">Integration</button>
              <button className="md:mt-6">Agriculture</button>
            </div>
          </div>
          <div>
            <h1 className="  font-bold">Resources</h1>
            <div className="flex flex-col items-start     font-normal mb-5 md:mb-0">
              <button className="md:mt-6">Services</button>
              <button className="md:mt-6">Industry</button>
              <button className="md:mt-6">Startup</button>
              <button className="md:mt-6">Media</button>
            </div>
          </div>
          <div>
            <h1 className="  font-bold">Links</h1>
            <div className="flex flex-col items-start  font-normal mb-5 md:mb-0">
              <button className="md:mt-6">Twitter</button>
              <button className="md:mt-6">Facebook</button>
              <button className="md:mt-6">Google</button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <hr className="mb-5 mt-20 border-b-1 bg-gray-700" />
        <div className="flex mb-5 flex-col gap-8 lg:flex-row justify-between  ">
          <div className="flex justify-center flex-col md:flex-row md:gap-10">
            <button className="">Terms & Conditions</button>
            <button className="">Privacy Policy</button>
          </div>
          <button className="">Copyright ©2023 Red Bangle</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
