import Baby from "../assets/images/Baby.png";

const About = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row lg:h-screen md:mx-5 my-20">
        <div className="bg-blue-100 bg-opacity-30 lg:w-[50%] py-12 md:p-12 flex flex-col justify-between gap-10 lg:gap-0 text-xl">
          <div className="flex items-center">
            <hr className=" border-b-2  border-blue-500 w-20" />
            <h1 className="text-blue-500 font-bold px-1 text-xl">About Us</h1>
            <hr className=" border-b-2  border-blue-500 w-full md:w-20" />
          </div>
          <h1 className="text-4xl font-bold">
            Yalla Manages the Drive, So You Can Savor Every Moment
          </h1>
          <p>
            Yalla handles driving, parking and traffic, so you can focus on what
            truly matters. Let us manage the road while you enjoy life
          </p>
          <div className="flex gap-3">
            <span className="text-xs">01</span>
            <h1>Available 24/7</h1>
          </div>
          <div className="flex gap-3">
            <span className="text-xs">02</span>
            <h1>Easy to Book A Ride</h1>
          </div>
          <div className="flex gap-3">
            <span className="text-xs">03</span>
            <h1>Hustle Free Chauffeur Rental</h1>
          </div>
        </div>
        <div className="lg:w-[50%] overflow-y-hidden">
          <div className="mb-10 lg:my-10">
            <div className="flex justify-between items-center px-5  ">
              <div className="h-8 w-14 md:w-12 rounded-full border-solid border-[10px] border-blue-600 opacity-90"></div>

              <hr className="w-[100%] border-solid border-1 border-gray-400" />
              <div className="h-8 w-14 md:w-12 rounded-full border-solid border-[10px] border-blue-600 opacity-90"></div>
              <hr className="w-full border-gray-400" />
              <div className="h-8 w-14 md:w-12 rounded-full border-solid border-[10px] border-blue-600 opacity-90"></div>
            </div>
            <div className="flex justify-between items-center pl-5">
              {/* <div className="grid grid-cols-3 grid-rows-2 pl-5"> */}
              <div>
                <h2>Trustworthy </h2>
                <h2>Chauffeur</h2>
              </div>
              <div>
                <h2>Guaranteed </h2>
                <h2> Punctuality</h2>
              </div>
              <div>
                <h2>Commitment to </h2>
                <h2>safety</h2>
              </div>
            </div>
          </div>
          <div className="h-full ">
            <img className="h-full w-full object-cover" src={Baby} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
