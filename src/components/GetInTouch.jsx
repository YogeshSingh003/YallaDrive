import ARROW from "../assets/icons/right-arrow.svg";

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row text-white w-full items-center justify-between bg-zinc-900 py-20 md:p-20 gap-5 md:gap-0 ">
      <div>
        <h1 className="text-4xl">Still Have Questions?</h1>
        <p className="text-xl mt-3">
          Can't find the answers you're looking for? Please chat to our friendly
          team
        </p>
      </div>
      <div className="bg-blue-600 opacity-90 text-white font-normal items-center gap-2  px-4 rounded flex text-xl h-12">
        <img
          className="w-5 h-5 -rotate-45 filter invert"
          src={ARROW}
          alt="Arrow"
        />
        <button>Get in Touch</button>
      </div>
    </div>
  );
};

export default GetInTouch;
