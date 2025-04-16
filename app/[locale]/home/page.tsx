"use client"
import React from "react";
import Slider from "./_components/Slider";
import Crypto from "./_components/Crypto";
import { Container } from "react-bootstrap";
import MarketUpdate from "./_components/MarketUpdate";
import Testimonials from "./_components/Testimonials";
import SliderBackground from "./_components/SliderBackground";
import HowItWorks from "./_components/HowItWork";
import InstallingApp from "./_components/WhatIsRockie";
import DownloadInfo from "./_components/DownloadInfo";
import CallToAction from "./_components/CallToAction";
import Image from "next/image";
import { useThemeStore } from "../store/ThemeStore";

const page = () => {
const {theme} = useThemeStore()
  return (
    <main>
      <section className="position-relative py-5 mb-4">
        <SliderBackground/> 
        <Container className="position-relative">
          <Slider />
          <Crypto />
        </Container>
      </section>
      <section className="py-5 my-4">
        <Container>
          <MarketUpdate />
        </Container>
      </section>
      <section className="py-5 my-4">
        <Container>
          <Testimonials />
        </Container>
      </section>
      <section className="py-5 my-4 bg-surface">
        <Container>
          <HowItWorks />
        </Container>
      </section>
      <section className="py-5 my-4">
        <Container>
          <InstallingApp/>
        </Container>
      </section>
      <section className="py-5 my-4">
        <Container>
          <DownloadInfo/>
        </Container>
      </section>
      <section className="call-to-action position-relative overflow-hidden">
      {theme !== "dark" && <Image
        src="/bg-gradient.svg"
        alt="decoration"
      fill
        className="position-absolute top-0 bottom-0 end-0 start-0 w-100 h-100"
      /> }
      <Image
        src="/decor-bottom-left.svg"
        alt="decoration"
        width={110}
        height={150}
        className="position-absolute bottom-0 start-0 opacity-25"
      />
      <Image
        src="/decor-top-right.svg"
        alt="decoration"
        width={42}
        height={56}
        className="position-absolute top-0 end-0 opacity-25"
      />
        <Container>
          <CallToAction/>
        </Container>
      </section>
    </main>
  );
};

export default page;
