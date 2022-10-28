import Image from 'next/image'
import React from 'react'

const StationCard = () => {
  return (
    <div className="flex mb-8 px-2 items-center rounded-[18px] min-h-[134px] shadow-around">
      <Image src="/assets/logos/intermarche.png" alt="logo station essence" width={94} height={94}/>
      <div className="flex-col grow">
        <p className="text-center">Intermarché</p>
        <p className="text-center">Longpont-sur-Orge</p>
      </div>
      <p className="font-semibold text-xl">1,923 €</p>
    </div>
  )
}

export default StationCard
