import React from "react";
import Slider from "./_components/Slider";
import Crypto from "./_components/Crypto";
import { Container } from "react-bootstrap";
import MarketUpdate from "./_components/MarketUpdate";
import Testimonials from "./_components/Testimonials";
import SliderBackground from "./_components/SliderBackground";

const page = () => {

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
      <section className="testimonials py-5 my-4">
        <Container>
          <Testimonials />
        </Container>
      </section>
    </main>
  );
};

export default page;
