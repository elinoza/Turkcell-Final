import React from "react";
import Slider from "./_components/Slider";
import Crypto from "./_components/Crypto";
import { Container } from "react-bootstrap";
import MarketUpdate from "./_components/MarketUpdate";
import Image from "next/image";
import Testimonials from "./_components/Testimonials";

const page = () => {
  return (
    <main>
      <section className="position-relative py-5 mb-4">
        <div className="position-absolute top-0 start-0 end-0 bg-surface w-100 h-75 "><Image src="/slider.svg" alt="slider-bg-img" width="570" height="448"/></div>
        <Container className="position-relative">
          <Slider />
          <Crypto />
        </Container>
      </section>
      <section className="py-5 my-4">
      <Container >
          <MarketUpdate/>
        </Container>
      </section>
      <section className="testimonials py-5 my-4">
      <Container >
          <Testimonials/>
        </Container>
      </section>
    </main>
  );
};

export default page;
