import type { NextPage } from "next";
import { useState } from "react";

import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Intro from "@/components/intro/Intro";
import Experience from "@/components/experience/Experience";
import Portfolio from "@/components/portfolio/Portfolio";

import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

const Home: NextPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=0.8" />
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
