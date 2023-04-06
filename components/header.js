import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  useEffect(() => {
    const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    

  

  console.log(isOpen);

  return (
    <>
      <header className="flex  w-full flex-row justify-between items-center  px-10 z-30">
        
        <div className=" flex justify-between align-middle mx-auto md:mx-2 pt-6 ">
          <Image width={150} height={200} src="/MLogo.png" alt="logo" />
          <div className="flex flex-col p-6 gap-5">
            <a href="#">
              <Image
                width={30}
                height={30}
                src="/iconFacebook.svg"
                alt="facebook"
              />
            </a>
            <a href="#">
              <Image
                width={30}
                height={30}
                src="/iconInstagram.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div
          className=" hidden md:flex
           items-center justify-around gap-2 md:gap-5 mx-auto text-lg md:text-2xl"
        >
          {/*  desktop menu */}
          <nav className="hidden md:flex space-x-8 text-xl " aria-label="main">
            <a href="/" className="hover:text-orange-400 font-medium">
              Accueil
            </a>
            <a href="galerie" className="hover:text-orange-400 font-medium">
              Galerie
            </a>
            <a href="prestations" className="hover:text-orange-400 font-medium">
              Prestations
            </a>
            <a href="contact" className="hover:text-orange-400 font-medium">
              Contact
            </a>
          </nav>
        </div>
        {/*  mobile menu */}
        <div className="  absolute flex md:hidden">
          <button
            className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center  z-80"
            aria-hidden="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 z-70 bg-white"
                  : "opacity-50 group-hover:opacity-100 z-70 bg-white"
              }`}
            />

            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "opacity-0 z-70 bg-white"
                  : "opacity-50 group-hover:opacity-100 z-70 bg-white"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 bg-white opacity-50 group-hover:opacity-100 z-70"
                  : "opacity-50 group-hover:opacity-100 bg-white z-70"
              }`}
            />
          </button>

          {/*  mobile menu */}
          <nav
            className={` h-[83vh] fixed top-[17vh]  flex flex-col  justify-around items-center w-full md:hidden bg-black z-40 duration-1000 ${
              isOpen ? "right-[0px]" : "right-[-100vw]"
            } `}
            aria-label="main"
          >
            <a href="/" className="hover:text-orange-400 font-medium">
              Accueil
            </a>
            <a href="galerie" className="hover:text-orange-400 font-medium">
              Galerie
            </a>
            <a href="prestations" className="hover:text-orange-400 font-medium">
              Prestations
            </a>
            <a href="contact" className="hover:text-orange-400 font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
