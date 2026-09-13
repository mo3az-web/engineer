import { Canvas } from "@react-three/fiber";
import { StudioLights } from "../Home/3dHelpers/StudioLight";
import PhoneView from "./models/PhoneView";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export const PhoneNumber = () => {
  const modelRef = useRef<THREE.Group>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [scrolledSection, setScrolledSection] =
    useState("call us now");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * =========================================================
   * PHONE NUMBERS
   * =========================================================
   */

// First number
const firstY = useTransform(
  scrollYProgress,
  [0.05, 0.12],
  [100, 0]
);

const firstOpacity = useTransform(
  scrollYProgress,
  [0.05, 0.12, 0.25],
  [0, 1, 0]
);
  // Telefax
  const secondY = useTransform(
    scrollYProgress,
    [0.27, 0.35],
    [100, 0]
  );

  const secondOpacity = useTransform(
    scrollYProgress,
    [0.27, 0.34, 0.45],
    [0, 1, 0]
  );

  // Third number
  const thirdY = useTransform(
    scrollYProgress,
    [0.45, 0.53],
    [100, 0]
  );

  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.52, 0.68],
    [0, 1, 0]
  );

  /*
   * =========================================================
   * SECTION TITLE
   * =========================================================
   */

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      let nextSection = "call us now";

      if (latest >= 0.10 && latest < 0.27) {
        nextSection = "main number";
      } else if (latest >= 0.27 && latest < 0.45) {
        nextSection = "telefax";
      } else if (latest >= 0.45) {
        nextSection = "second number";
      }

      setScrolledSection((current) =>
        current === nextSection ? current : nextSection
      );
    }
  );

  /*
   * =========================================================
   * PHONE MODEL MOVEMENT
   * =========================================================
   */

  const phoneY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -1]
  );

  const phoneRotationX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 0.1]
  );

  useEffect(() => {
    const unsubscribeY = phoneY.on("change", (value) => {
      if (modelRef.current) {
        modelRef.current.position.y = value;
      }
    });

    const unsubscribeRotation = phoneRotationX.on(
      "change",
      (value) => {
        if (modelRef.current) {
          modelRef.current.rotation.x = value;
        }
      }
    );

    return () => {
      unsubscribeY();
      unsubscribeRotation();
    };
  }, [phoneY, phoneRotationX]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-white"
    >
      <div className="sticky top-25 h-screen overflow-hidden">

        {/* TITLE */}

        <div className="relative z-20 mb-5 flex items-center justify-center gap-4 pt-2">
          <span className="h-px w-12 bg-black" />

          <p className="text-sm font-medium uppercase tracking-[0.4em] text-black md:text-base">
            {scrolledSection}
          </p>

          <span className="h-px w-12 bg-black" />
        </div>

        {/* PHONE */}

        <div className="relative mx-auto h-[500px] w-full max-w-5xl">

          <Canvas className="z-10000"
            camera={{
              position: [0, 0, 10],
              fov: 60,
              near: 0.1,
              far: 200,
            }}
            gl={{
              alpha: true,
              antialias: true,
            }}
          >
            <StudioLights />

            <group ref={modelRef}>
              <PhoneView />
            </group>
          </Canvas>

          {/* PHONE NUMBERS */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[8%]
              
              -translate-x-1/2
            "
          >

            {/* First number */}

         <motion.div
  style={{
    y: firstY,
    opacity: firstOpacity,
  }}
  className="
  
    absolute
    left-1/2
    -translate-x-1/2
    whitespace-nowrap
    text-3xl
    font-medium
    text-black
    md:text-4xl
  "
>

0122 8008588
</motion.div>

            {/* Telefax */}

            <motion.div
              style={{
                y: secondY,
                opacity: secondOpacity,
              }}
              className="
                absolute
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-3xl
                font-medium
                text-black
                md:text-4xl
              "
            >
              0502705046
            </motion.div>

            {/* Third number */}

            <motion.div
              style={{
                y: thirdY,
                opacity: thirdOpacity,
              }}
              className="
                absolute
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-3xl
                font-medium
                text-black
                md:text-4xl
              "
            >
              0105099611
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};