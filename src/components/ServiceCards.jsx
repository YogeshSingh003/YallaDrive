import Driver from "../assets/icons/driver.svg";
import Plane from "../assets/icons/plane.svg";
import Employee from "../assets/icons/manager.svg";
import Building from "../assets/icons/office-building.svg";
import Event from "../assets/icons/calendar.svg";
import VIP from "../assets/icons/vip-crown.svg";
import Fast from "../assets/icons/fast-forward.svg";

const ServiceCards = () => {
  const serviceData = [
    {
      logo: Driver,
      title: "Personalized Services",
      content:
        "Book a luxury vehicle and enjoy a dedicated chauffeur who meets your specific needs.",
    },
    {
      logo: Plane,
      title: "Airport Transfers",
      content:
        "Arrive on time and in style with our reliable airport transfer service.",
    },
    {
      logo: Employee,
      title: "Corporate Services",
      content:
        "Elevate your business travel with our discreet and punctual drivers.",
    },
    {
      logo: Building,
      title: "City Tours",
      content:
        "Arrive in style for your special occasions with our elegent transport options.",
    },
    {
      logo: Event,
      title: "Event Transportations",
      content: "Explore Dubai rffortlessly with our knowledgeable chauffeurs. ",
    },
    {
      logo: VIP,
      title: "VIP Service",
      content:
        "Experience the ultimate in luxury with our VIP chauffeur service",
    },
  ];

  return (
    <div className="h-full bg-sky-100 bg-opacity-30 pl-4">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 h-full ">
        {serviceData.map((obj, i) => (
          <div
            key={i}
            className="w-full pr-24 flex flex-col justify-between h-96  py-10"
          >
            <div className="h-12 w-12 relative bg-black text-white flex items-center justify-center font-bold text-xl">
              {" "}
              0{i + 1}
              <div className=" absolute w-10 h-10 -right-2 -z-10 bg-blue-600"></div>
            </div>
            <div>
              <img className="h-12 w-12" src={obj.logo} />
            </div>
            <div className="flex flex-col justify-between  h-[30%]">
              <div className="font-bold text-xl">{obj.title}</div>
              <p className="">{obj.content}</p>
            </div>
            <div className="flex items-center">
              <img className="h-4 w-4 " src={Fast} />
              <button className="px-3"> Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
