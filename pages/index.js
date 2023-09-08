import { Hero } from "@/sections"
import Head from "next/head"
import Table from "@/utils/App"
export default function Home() {
  return (
    <>
      <Head>
        <title>MBCCoins</title>
      </Head>
      <Hero />
      <Table />
    </>
  )
}
