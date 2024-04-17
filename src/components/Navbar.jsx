import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div
      className={
        "navbar flex justify-center items-center gap-10 m-0 p-0 border-b-[1.5px] fixed top-0 w-full opacity-100 shadow-md z-30 bg-white"
      }
    >
      <a
        href={"/"}
        className="logo p-8 text-2xl sm:text-4xl font-semibold border-r-[1.5px] border-right m-0 h-full"
      >
        Albison Academy
      </a>
      <div
        className={`overlay-nav flex ${nav ? " " : "hidden"}`}
        onClick={() => setNav(false)}
      >
        <p className={`${nav ? " " : "hidden"}`} onClick={() => setNav(false)}>
          X
        </p>
      </div>
      <ul
        className={`first-ul flex justify-between items-center gap-10 p-8 text-lg border-r-[1.5px] border-right m-0 h-full`}
      >
        <li>
          <a
            href="#about"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Haqimizda
          </a>
        </li>
        <li>
          <a
            href="#service"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Kurslarimiz
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            KBS
          </a>
        </li>
        <li>
          <a
            href="#yt-vid"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Natijalarimiz
          </a>
        </li>
        <li>
          <a
            href="/honor"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Sharaf Kodeksi
          </a>
        </li>
      </ul>
      <ul
        className={`sec-ul flex justify-between items-center gap-10 p-8 text-lg border-r-[1.5px] border-right m-0 h-full ${
          nav ? " " : "hidden"
        }`}
      >
        <li>
          <a
            href="#about"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Haqimizda
          </a>
        </li>
        <li>
          <a
            href="#service"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Kurslarimiz
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            KBS
          </a>
        </li>
        <li>
          <a
            href="#yt-vid"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Natijalarimiz
          </a>
        </li>
        <li>
          <a
            href="/honor"
            className="text-gray-700 hover:text-black transition-all"
            onClick={() => setNav(false)}
          >
            Sharaf Kodeksi
          </a>
        </li>
        <a
          href="tel:+998901122757"
          className="number text-xl  bg-transparent py-3 px-6 lg:px-3  hover:bg-[#00224a] hover:text-white p-8"
        >
          +998 90 112 27 57
        </a>
      </ul>
      <a
        href="tel:+998901122757"
        className="number text-xl  bg-transparent py-3 px-6 lg:px-3  hover:bg-[#00224a] hover:text-white p-8"
      >
        +998 90 112 27 57
      </a>
      <span onClick={() => setNav(true)} className="bars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default Navbar;
