import Head from "next/head";
import { Header } from "../components/Header/Header";
import { SectionActivityCreate } from "../components/SectionActivityCreate/SectionActivityCreate";

export default function Homre() {
  return(
    <>
      <Head>
        <title>Atividades | Challenge</title>
      </Head>
      <Header />
      <SectionActivityCreate />
    </>
  )
}
