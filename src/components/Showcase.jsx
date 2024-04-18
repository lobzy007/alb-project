import React from "react";
import banner from "../images/banner.svg";

const Showcase = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-36 px-20">
      <div className="txt w-full mx-auto sm:mx-0">
        <div className="py-3 text-center lg:text-start">
          <button className="pin text-[#0066ff] bg-[#D9E8FF] hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
            DASTURLASH MAKTABI
          </button>
        </div>
        <div className="py-3 text-center lg:text-start">
          <h1 className="title text-5xl lg:text-80xl font-bold text-[#241A24] leading-tight">
            Barqaror kelajak- bepul* ta'lim asosida
          </h1>
        </div>
        <div className="my-7 text-center lg:text-start">
          <a
            href="/"
            className="text-sm md:text-xl font-semibold hover:shadow-xl bg-[#0066ff] text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-[#26508f]"
          >
            Boshlash
          </a>
        </div>
      </div>
      <div className="img w-full">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Showcase;
