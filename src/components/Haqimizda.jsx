import React from "react";
import imgOne from "../images/imgOne.svg";
import imgTwo from "../images/imgTwo.svg";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import imgThree from "../images/imgThree.svg";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div id="about" className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
        <h3 className="text-center text-[#0066ff] text-lg tracking-widest">
          Biz haqimizda
        </h3>
        <h4 className="text-center text-4xl lg:text-[65px] font-bold">
          Aslida kimmiz?
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-30">
          <div className="hover:bg-[#00224a] bg-white rounded-3xl mt-16 pt-5 pl-8 pb-15 pr-6 shadow-xl group">
            <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
              Biz haqimizda
            </h4>
            <img
              src={imgOne}
              alt={""}
              width={100}
              height={100}
              className="mb-2"
            />
            <h4 className="text-lg font-normal text-black group-hover:text-white mb-2">
              Biz o’quv markazi emas, balki IT-ni o’rganishdan ishga
              kirguningizgacha ta’lim beradigan dunyodagi yagona ta’lim maskani.
              Bunday imkoniyatlarga grant asosida ega bo’lish uchun shartlarimiz
              bilan tanishib chiqing
            </h4>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=6Yy4WC0zUKE&t=2s&ab_channel=AlbisonAcademy"
              className="text-lg font-semibold group-hover:text-white text-[#0066FF] flex items-center"
            >
              Batafsil
              <ChevronRightIcon width={20} height={20} />
            </a>
          </div>
          <div className="hover:bg-[#00224a] bg-white rounded-3xl mt-16 pt-5 pl-8 pb-15 pr-6 shadow-xl group">
            <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
              Qizlar uchun
            </h4>
            <img
              src={imgTwo}
              alt={""}
              width={100}
              height={100}
              className="mb-2"
            />
            <h4 className="text-lg font-normal text-black group-hover:text-white mb-2">
              IT Girls kursi IELTS 7+ bo’lgan qizlar uchun maxsus kurs bo’lib,
              barcha bitiruvchilar hozirda IT kompaniyalarda ishlab kelmoqda. Bu
              kursga qabul faqat yilda bir marta bo'lib, xotin-qizlar kuni
              munosabati bilan tashkil etiladi
            </h4>
            <a
              target="_blank"
              href="https://www.spot.uz/oz/2023/03/10/it-girls/"
              className="text-lg font-semibold group-hover:text-white text-[#0066FF] flex items-center"
            >
              Batafsil
              <ChevronRightIcon width={20} height={20} />
            </a>
          </div>
          <div className="hover:bg-[#00224a] bg-white rounded-3xl mt-16 pt-5 pl-8 pb-15 pr-6 shadow-xl group">
            <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
              Ishga kirish
            </h4>
            <img
              src={imgThree}
              alt={""}
              width={100}
              height={100}
              className="mb-2"
            />
            <h4 className="text-lg font-normal text-black group-hover:text-white mb-2">
              Xayriya kurslari eng qisqa vaqt ichida kadrlarni tayyorlab, ishga
              joylashtirish uchun ishlab chiqilgan. Kursdan keyin siz xohlagan
              ishga joylashish yoki Albison jamoası bilan birgalikda o’sishda
              davom etishingiz mumkin
            </h4>
            <a
              target="_blank"
              href="https://www.youtube.com/@albisonuz/shorts"
              className="text-lg font-semibold group-hover:text-white text-[#0066FF] flex items-center "
            >
              Batafsil
              <ChevronRightIcon width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
