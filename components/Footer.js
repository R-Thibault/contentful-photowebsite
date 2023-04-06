import Image from 'next/image'
import React from 'react'

export function Footer(){
  return (
    <>
    <footer className="min-h-20 flex justify-center font-medium z-20 items-center">
        <p className="uppercase text-lg font-medium">
          Charles Catin - Photographe
        </p> 
        <span className="mx-2">© Copyright All rights reserved</span>
        <div className="flex items-center gap-2">
          <a href="#"><Image width={20}  height={20} src="/iconFacebook.svg" alt="facebook" /></a>
          <a href="#"><Image width={20}  height={20} src="/iconInstagram.svg" alt="instagram" /></a>
        </div>
      </footer>
    </>
  )
}