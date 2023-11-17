import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Search from "../components/search";
import HeroSection from "../components/heroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Search Myrlin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="mini-logo.png" />
      </Head>
      <section className={styles.main}>
        <Header />
        <Search />
        <HeroSection />
      </section>
    </>
  );
}
