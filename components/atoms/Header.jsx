import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <nav className="sticky top-0 w-full h-14 px-4 flex justify-end items-center bg-main-color">
      <Image src="/FYF-Logo.svg" title="Find Your Fuel Logo" alt="Logo Find Your Fuel" width={48} height={48}/>
      <p className="ml-2 font-semibold text-xl text-white">FindYourFuel</p>
    </nav>
  )
}

export default Header
