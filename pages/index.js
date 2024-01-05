import Logo from "@/public/logo.svg";
import Working from "@/public/illustration-working.svg";
import BrandRecog from "@/public/icon-brand-recognition.svg";
import IconDet from "@/public/icon-detailed-records.svg";
import IconCust from "@/public/icon-fully-customizable.svg";
import FB from "@/public/icon-facebook.svg";
import TW from "@/public/icon-twitter.svg";
import PT from "@/public/icon-pinterest.svg";
import IN from "@/public/icon-instagram.svg";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef();
  const msgRef = useRef();
  const formRef = useRef();

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  const validURL = (str) => {
    let pattern = new RegExp(
      "^(http(s)://.)[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$"
    );

    return pattern.test(str);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value === "") {
      if (msgRef.current) {
        msgRef.current.innerHTML = "Please enter an URL";
      }

      inputRef.current.classList.add("border-red");
    } else if (inputRef.current && !validURL(inputRef.value)) {
      if (msgRef.current) {
        msgRef.current.innerHTML = "Please enter a valid URL";
      }

      inputRef.current.classList.add("border-red");
    } else if (inputRef.current) {
      if (msgRef.current) {
        msgRef.current.innerHTML = "";
      }

      inputRef.current.classList.remove("border-red");
    }
  };

  useEffect(() => {
    formRef.current
      ? formRef.current.addEventListener("submit", formSubmit)
      : undefined;
  }, [formRef]);

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <img src={Logo.src} alt="logo" />

            <div className="hidden lg:flex space-x-8 font-bold">
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </a>

              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Pricing
              </a>

              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Resources
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
            <a href="#" className="hover:text-veryDarkViolet">
              Login
            </a>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>

          <button
            onClick={openMenu}
            id="menu-btn"
            type="button"
            className={`block hamburger lg:hidden focus:outline-none ${
              menuOpen ? "open" : ""
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div
          className={`absolute ${
            menuOpen ? "flex" : "hidden"
          } p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Log In
            </a>
            <a
              href="#"
              className="w-full py-3 rounded-full bg-cyan text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          <div className="flex flex-col lg:w-1/2 space-y-10 mb-44 lg:mt-16 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>

            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>

            <div className="mx-auto lg:mx-0">
              <a
                href="#"
                className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="mb-24 lg:w-1/2 mx-auto md:w-180 lg:mb-0">
            <img src={Working.src} alt="working" />
          </div>
        </div>
      </section>

      <section id="shorten" className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form
            ref={formRef}
            action=""
            id="link-form"
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Shorten a link here"
              id="link-input"
              ref={inputRef}
            />

            <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
              Shorten it!
            </button>

            <div
              ref={msgRef}
              className="absolute left-7 bottom-3 text-red text-small italic"
            ></div>
          </form>

          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://artisancey.co.nz
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/asd2De</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://artisancey.co.nz
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/asd2De</div>
              <button className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://artisancey.co.nz
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/asd2De</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>

          <p className="max-w-xs mx-auto text-center text-gray-400">
            Track how your links are performing axross the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>

          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={BrandRecog.src} alt="" />
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>

            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="relative mt-24 md:mt-8 flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={IconDet.src} alt="" />
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed records
            </h5>

            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="relative mt-24 md:mt-16 flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={IconCust.src} alt="" />
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>

            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>

          <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>

      <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <img src={Logo.src} alt="" />

          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Features
              </div>

              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Link Shortening
                </a>

                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Branded links
                </a>

                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Analytics
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Resources
              </div>

              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Blog
                </a>

                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Developers
                </a>

                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Support
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Compnany
              </div>

              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  About
                </a>

                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Our Team
                </a>

                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Careers/Contact
                </a>
              </div>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="#">
              <img src={FB.src} alt="" className="ficon" />
            </a>

            <a href="#">
              <img src={TW.src} alt="" className="ficon" />
            </a>

            <a href="#">
              <img src={PT.src} alt="" className="ficon" />
            </a>

            <a href="#">
              <img src={IN.src} alt="" className="ficon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
