import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="static h-[1600px]">
      <Head>
        <title>FindYourFuel</title>
        <meta name="description" content="Trouve une station essence autour de toi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute top-0 w-full h-14 px-4 flex justify-end items-center bg-main-color">
        <Image src="/FYF-Logo.svg" alt="Logo application" width={48} height={48}/>
        <p className="ml-2 font-semibold text-xl text-white">FindYourFuel</p>
      </div>

      <main className="pt-20">
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
