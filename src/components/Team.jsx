import React from "react";
import SwiperTeam from "./Carousel";
import Furqat from "../images/furqat.webp";
import Ibrohim from "../images/ibrohim.webp";
import Zokir from "../images/zokir.webp";
import Kamron from "../images/kamron.webp";
import Dilshod from "../images/dilshod.webp";
import Shuhrat from "../images/shuhrat.webp";
import logLin from "../images/linkedin.svg";
import { SwiperSlide } from "swiper/react";

const data = [
  {
    profession: "CEO",
    name: "Furqat",
    surname: "Teshaev",
    imgSrc: Furqat,
    in: "https://www.linkedin.com/in/furkat-teshaev-b16701199/",
  },
  {
    profession: "#developer",
    name: "Kamron",
    surname: "Shodmonov",
    imgSrc: Kamron,
    in: "https://www.linkedin.com/in/kamronbekshodmonov/",
  },
  {
    profession: "#developer",
    name: "Ibrohim",
    surname: "Fattohov",
    imgSrc: Ibrohim,
    in: "https://www.linkedin.com/in/ibrohim-fattohov/",
  },
  {
    profession: "#developer",
    name: "Shuhrat",
    surname: "Ergashev",
    imgSrc: Shuhrat,
    in: "https://www.linkedin.com/in/shuhrat-ergashev-aa1771238/",
  },
  {
    profession: "#developer",
    name: "Dilshodbek",
    surname: "Khodjakov",
    imgSrc: Dilshod,
    in: "https://www.linkedin.com/in/dilshodbek-khodjakov/",
  },
  {
    profession: "#developer",
    name: "Zokirjon",
    surname: "Murotov",
    imgSrc: Zokir,
    in: "https://www.linkedin.com/in/zokirjon-murotov-2a5200239/",
  },
];

const Weworkslider = () => {
  return (
    <SwiperTeam>
      {data?.map((items, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl overflow-hidden h-full ">
            <div className="flex flex-col">
              <div className="h-[230px] overflow-hidden w-4/5 rounded-[50%_0_50%_50%] m-auto">
                <img
                  src={items.imgSrc}
                  alt="Image"
                  width={182}
                  height={160}
                  className={`inline-block m-auto w-full ${
                    items.imgSrc === "/images/wework/shuhrat.webp"
                      ? "-translate-y-16"
                      : items.imgSrc === "/images/wework/ibrohim.webp"
                      ? "-translate-y-11"
                      : items.imgSrc === "/images/wework/dilshod.webp"
                      ? "-translate-y-11"
                      : items.imgSrc === "/images/wework/zokir.webp"
                      ? "-translate-y-14"
                      : items.imgSrc === "/images/wework/kamron.webp"
                      ? "-translate-y-5"
                      : items.imgSrc === "/images/wework/furqat.webp"
                      ? "-translate-y-4"
                      : null
                  }`}
                />
              </div>
              <a href={items.in} target="_blank">
                <img
                  src={logLin}
                  alt="greenbg"
                  className="w-28 h-28 absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-20 hover:translate-y-15 transition"
                />
              </a>
            </div>
            <h4 className="text-4xl font-bold pt-14">{items.name}</h4>
            <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
              {items.profession}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </SwiperTeam>
  );
};

export default Weworkslider;
