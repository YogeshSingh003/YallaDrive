import Device from "../assets/images/Device.png";

const Streamline = () => {
  return (
    <div className="">
      <div className="flex  flex-col md:flex-row my-20 gap-5">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:w-[60%]">
          Streamline Your Gala Experience with Out All-in-One App
        </h1>
        <div className="md:text-lg lg:text-xl md:w-[40%]">
          <hr className=" border-2 mb-2 border-blue-500 w-full" />
          <p>
            Effortlessly manage your gala events with our app - seamlessly
            handle RSVPs, track guest lists, and streamline events details all
            in one place.
          </p>
        </div>
      </div>
      <div className="lg:-mx-20">
        <img src={Device} />
      </div>
    </div>
  );
};

export default Streamline;
