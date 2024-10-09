import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <div id="services">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <div className="flex items-center">
            <hr className=" border-b-2  border-blue-500 w-20" />
            <h1 className="text-blue-500 font-bold px-1 text-xl">
              Our Services
            </h1>
            <hr className=" border-b-2  border-blue-500 w-full md:w-20" />
          </div>
          <h1 className="text-4xl font-bold py-5">
            Luxury Redefined: Chauffeur Services Beyond Compare
          </h1>
        </div>
        <div className="md:w-[50%] pt-3">
          <hr className=" border-b-2  border-blue-500 w-full " />
          <p className="text-xl py-8">
            Yalla handles driving, parking and traffic, so you can focus on what
            truly matters. Let us manage the road while you enjoy life
          </p>
        </div>
      </div>
      <div className="">
        <ServiceCards />
      </div>
    </div>
  );
};

export default Services;
