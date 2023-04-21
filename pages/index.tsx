import type { NextPage } from "next";
import { useState } from "react";

import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Intro from "@/components/intro/Intro";
import Experience from "@/components/experience/Experience";
import Portfolio from "@/components/portfolio/Portfolio";

import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

import TrackVisibility from "react-on-screen";

// import "../styles/globals.css";
// const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="home">
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
