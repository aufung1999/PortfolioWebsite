import type { NextPage } from "next";
import {
  Button,
  Container,
  Navbar,
  Text,
  Grid,
  Col,
  Collapse,
  Pagination,
  Radio,
  Table,
  Card,
  Row,
  Popover,
} from "@nextui-org/react";
import { useState } from "react";

import Projects from "@/components/_Project";
import { Banner } from "@/components/_Banner";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Intro from "@/components/intro/Intro";
import Experience from "@/components/experience/Experience";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

import TrackVisibility from "react-on-screen";

// import "../styles/globals.css";
// const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
        {/* <TrackVisibility>
      {({ isVisible }) => (
        isVisible &&

        )}
        </TrackVisibility> */}
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
