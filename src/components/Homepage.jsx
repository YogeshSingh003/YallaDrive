import APPLE from "../assets/icons/apple-logo.svg";
import PLAY from "../assets/icons/play.svg";
import Pic1 from "../assets/images/picture1.png";
import Pic2 from "../assets/images/picture2.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="w-full flex flex-col-reverse lg:flex-row  bg-blue-600 opacity-90 text-white px-12 py-16 rounded md:my-16">
        <div className="lg:w-1/2">
          <div className="text-3xl md:text-[52px] md:flex md:flex-col md:gap-8  font-bold">
            <h1>Yalla Drive</h1>
            <h1>On Demand</h1>
            <h1>Chauffeur Service</h1>
          </div>
          <h1 className="py-7 md:py-14 text-xl">On Demand Chauffeur Service</h1>
          <div className="flex  md:text-xl gap-2 flex-wrap ">
            <button className="border border-solid border-white rounded p-2">
              Per Minute
            </button>
            <button className="border border-solid border-white rounded p-2">
              Per Hour
            </button>
            <button className="border border-solid border-white rounded p-2">
              Per Day
            </button>
            <button className="border border-solid border-white rounded p-2">
              Per Week
            </button>
            <button className="border border-solid border-white rounded p-2">
              Per Month
            </button>
          </div>
          <div className="text-black flex text-xl mt-20">
            <div className="bg-white rounded p-2 opacity-90 font-normal items-center gap-2 py-2 px-4  flex ">
              <img className="w-7   " src={APPLE} />
              <button className="">Apple store</button>
            </div>

            <div className="bg-white  p-2 mx-4 opacity-90  font-normal items-center gap-2 py-2 px-4 rounded flex ">
              <img className="w-7 " src={PLAY} />
              <button className="">Google play</button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:relative ">
          <div className="h-[50%] w-[60%]">
            <img className=" h-full w-full object-cover" src={Pic1} />
          </div>
          <div>
            <img
              className="h-[60%] w-[80%] relative bottom-14 md:bottom-32 left-20 md:left-32 lg:absolute lg:right-0 lg:bottom-0 -z-10 object-cover"
              src={Pic2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
