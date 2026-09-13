"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Ahero from "./Ahero";
import Inner from "../inner/Inner";
import Offer from "./whatWeOffer";
import OfficeOverview from "./overView";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, 1]
  );

  return (
    <Inner>
      {/* Hero */}
      <section
        ref={heroRef}
        className="sticky top-0 z-10 min-h-screen"
      >
        <Ahero />

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 z-40 bg-black"
        />
      </section>

      {/* Offer */}
      <section className="relative z-20 min-h-screen bg-black">
        <Offer />
      </section>
  <section className="relative z-20 min-h-screen bg-black">
        <OfficeOverview />
      </section>

      {/* Location */}

    </Inner>
  );
};

export default About;

