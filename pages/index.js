import Head from 'next/head'
import { useEffect, useState } from 'react'
import StationCard from '../components/atoms/StationCard'

export default function Home() {
  const [latitude, setLatitude] = useState(0)

  useEffect(() => {
    navigator
      .geolocation
      .getCurrentPosition((position) => setLatitude(position.coords.latitude))
  }, [])

  return (
    <div>
      <Head>
        <title>FindYourFuel</title>
        <meta name="description" content="Trouve une station essence autour de toi"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="pt-20 px-2">
        {latitude}
        <StationCard/>
        <StationCard/>
        <StationCard/>
        <StationCard/>
        <StationCard/>
        <StationCard/>
        <StationCard/>
        <StationCard/>
        <StationCard/>
      </main>
    </div>
  )
}
