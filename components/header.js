import Image from "next/image"
import React from "react"

export function Header (){

  return (
    <>
    <header className=" flex flex-col md:flex-row justify-between items-center  px-10 z-20">
      <div className="flex justify-between align-middle p-6 ">
        <Image width={150}  height={200} src="/MLogo.png" alt="logo" />
        <div className="flex flex-col p-6 gap-5">
          <a href="#"><Image width={30}  height={30} src="/iconFacebook.svg" alt="facebook" /></a>
          <a href="#"><Image width={30}  height={30} src="/iconInstagram.svg" alt="instagram" /></a>
        </div>
      </div>
      <div className="flex w-[50vw] justify-around gap-2 md:gap-5 mx-auto text-lg md:text-2xl">
        
          <a href="/" className="hover:text-orange-400 font-medium">Accueil</a>
          <a href="galerie" className="hover:text-orange-400 font-medium">Galerie</a>
          <a href="prestations" className="hover:text-orange-400 font-medium">Prestations</a>
          <a href="contact" className="hover:text-orange-400 font-medium">Contact</a>
        
      </div>
    </header>
    </>
  )
}