import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import AcViewNoHover from "../Home/non-HoverModels/AcUnitViewNH";
import ElbowViewNoHover from "../Home/non-HoverModels/ElbowViewNH";
import SprinklerViewNoHover from "../Home/non-HoverModels/fireSprinklerModelViewerNH";

import { StudioLights } from "../Home/3dHelpers/StudioLight";

const Offer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // =====================================================
  // ROTATION
  // =====================================================

  const acRotation = useTransform(scrollYProgress, [0, 0.33], [0, Math.PI * 2]);
  const fireRotation = useTransform(scrollYProgress, [0.33, 0.66], [0, Math.PI * 2]);
  const plumbingRotation = useTransform(scrollYProgress, [0.66, 1], [0, Math.PI * 2]);

  // =====================================================
  // RANGES لكل عنصر (بداية الظهور - نهاية الاختفاء)
  // =====================================================

  const AC_RANGE = { start: 0, in: 0.27, out: 0.30 };
  const FIRE_RANGE = { in0: 0.36, in1: 0.39, out0: 0.60, out1: 0.63 };
  const PLUMBING_RANGE = { in0: 0.69, in1: 0.72 };

  // =====================================================
  // MODEL OPACITY + SCALE + BLUR
  // =====================================================

  const acOpacity = useTransform(
    scrollYProgress,
    [AC_RANGE.start, 0.24, AC_RANGE.in, AC_RANGE.out],
    [1, 1, 1, 0]
  );
  const acScale = useTransform(scrollYProgress, [0, AC_RANGE.in, AC_RANGE.out], [1, 1, 0.7]);
  const acBlur = useTransform(scrollYProgress, [0.25, AC_RANGE.out], [0, 12]);
  const acVisible = useTransform(scrollYProgress, (v) =>
    v <= AC_RANGE.out ? "visible" : "hidden"
  );

  const fireOpacity = useTransform(
    scrollYProgress,
    [FIRE_RANGE.in0, FIRE_RANGE.in1, FIRE_RANGE.out0, FIRE_RANGE.out1],
    [0, 1, 1, 0]
  );
  const fireScale = useTransform(
    scrollYProgress,
    [FIRE_RANGE.in0, FIRE_RANGE.in1, FIRE_RANGE.out0, FIRE_RANGE.out1],
    [0.7, 1, 1, 0.7]
  );
  const fireBlur = useTransform(
    scrollYProgress,
    [FIRE_RANGE.in0, FIRE_RANGE.in1, FIRE_RANGE.out0, FIRE_RANGE.out1],
    [12, 0, 0, 12]
  );
  const fireVisible = useTransform(scrollYProgress, (v) =>
    v >= FIRE_RANGE.in0 && v <= FIRE_RANGE.out1 ? "visible" : "hidden"
  );

  const plumbingOpacity = useTransform(
    scrollYProgress,
    [PLUMBING_RANGE.in0, PLUMBING_RANGE.in1, 1],
    [0, 1, 1]
  );
  const plumbingScale = useTransform(
    scrollYProgress,
    [PLUMBING_RANGE.in0, PLUMBING_RANGE.in1],
    [0.7, 1]
  );
  const plumbingBlur = useTransform(
    scrollYProgress,
    [PLUMBING_RANGE.in0, PLUMBING_RANGE.in1],
    [12, 0]
  );
  const plumbingVisible = useTransform(scrollYProgress, (v) =>
    v >= PLUMBING_RANGE.in0 ? "visible" : "hidden"
  );

  // =====================================================
  // TEXT: نفس منطق الظهور/الاختفاء التام + visibility
  // =====================================================

  const acTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, AC_RANGE.in, AC_RANGE.out],
    [1, 1, 1, 0]
  );
  const acTextX = useTransform(scrollYProgress, [0, AC_RANGE.out], [0, -60]);
  const acTextY = useTransform(scrollYProgress, [0, AC_RANGE.out], [0, -20]);
  const acTextScale = useTransform(scrollYProgress, [0, AC_RANGE.out], [1, 0.9]);
  const acTextVisible = acVisible;

  const fireTextOpacity = useTransform(
    scrollYProgress,
    [FIRE_RANGE.in0, 0.40, FIRE_RANGE.out0, FIRE_RANGE.out1],
    [0, 1, 1, 0]
  );
  const fireTextX = useTransform(
    scrollYProgress,
    [FIRE_RANGE.in0, FIRE_RANGE.out1],
    [60, -60]
  );
  const fireTextY = useTransform(
    scrollYProgress,
    [FIRE_RANGE.in0, 0.40, FIRE_RANGE.out0, FIRE_RANGE.out1],
    [20, 0, 0, -20]
  );
  const fireTextScale = useTransform(
    scrollYProgress,
    [FIRE_RANGE.in0, 0.40, FIRE_RANGE.out0, FIRE_RANGE.out1],
    [0.9, 1, 1, 0.9]
  );
  const fireTextVisible = fireVisible;

  const plumbingTextOpacity = useTransform(
    scrollYProgress,
    [PLUMBING_RANGE.in0, 0.73, 1],
    [0, 1, 1]
  );
  const plumbingTextX = useTransform(
    scrollYProgress,
    [PLUMBING_RANGE.in0, 0.73],
    [-60, 0]
  );
  const plumbingTextY = useTransform(
    scrollYProgress,
    [PLUMBING_RANGE.in0, 0.73],
    [20, 0]
  );
  const plumbingTextScale = useTransform(
    scrollYProgress,
    [PLUMBING_RANGE.in0, 0.73],
    [0.9, 1]
  );
  const plumbingTextVisible = plumbingVisible;

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-13 h-screen overflow-hidden">
        {/* TITLE */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0.85]),
          }}
          className="absolute left-0 top-12 z-50 w-full text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            What We Offer
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-6xl">
            ماذا نقدم؟
          </h1>
        </motion.div>

        {/* MODELS */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
          {/* AC */}
          <motion.div
            style={{
              opacity: acOpacity,
              scale: acScale,
              filter: useTransform(acBlur, (b) => `blur(${b}px)`),
              visibility: acVisible,
            }}
            className="absolute inset-0"
          >
            <Canvas
              camera={{ position: [0, 5, 5], fov: 50, near: 0.1, far: 100 }}
              gl={{ alpha: true }}
            >
              <StudioLights />
              <AcViewNoHover scrollRotation={acRotation} />
            </Canvas>
          </motion.div>

          {/* FIRE */}
          <motion.div
            style={{
              opacity: fireOpacity,
              scale: fireScale,
              filter: useTransform(fireBlur, (b) => `blur(${b}px)`),
              visibility: fireVisible,
            }}
            className="absolute inset-0"
          >
            <Canvas
              camera={{ position: [0, 5, 5], fov: 50, near: 0.1, far: 100 }}
              gl={{ alpha: true }}
            >
              <StudioLights />
              <SprinklerViewNoHover scrollRotation={fireRotation} />
            </Canvas>
          </motion.div>

          {/* PLUMBING */}
          <motion.div
            style={{
              opacity: plumbingOpacity,
              scale: plumbingScale,
              filter: useTransform(plumbingBlur, (b) => `blur(${b}px)`),
              visibility: plumbingVisible,
            }}
            className="absolute inset-0"
          >
            <Canvas
              camera={{ position: [0, 5, 5], fov: 50, near: 0.1, far: 100 }}
              gl={{ alpha: true }}
            >
              <StudioLights />
              <ElbowViewNoHover scrollRotation={plumbingRotation} />
            </Canvas>
          </motion.div>
        </div>

        {/* AC TEXT */}
        <motion.div
          style={{
            opacity: acTextOpacity,
            x: acTextX,
            y: acTextY,
            scale: acTextScale,
            visibility: acTextVisible,
          }}
          className="absolute left-[8%] top-1/2 z-40 w-[320px] -translate-y-1/2"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-blue-500">01</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-blue-600 md:text-4xl">
            Refrigeration
            <br />
            & Air Conditioning
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500">
            تصميم وتنفيذ أنظمة التكييف والتهوية
            وحلول التبريد للمشروعات المختلفة.
          </p>
        </motion.div>

        {/* FIRE TEXT */}
        <motion.div
          style={{
            opacity: fireTextOpacity,
            x: fireTextX,
            y: fireTextY,
            scale: fireTextScale,
            visibility: fireTextVisible,
          }}
          className="absolute right-[8%] top-1/2 z-40 w-[320px] -translate-y-1/2 text-right"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-red-500">02</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-red-600 md:text-4xl">
            Fire Protection
            <br />
            Engineering
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500">
            تصميم وتنفيذ أنظمة الإطفاء
            والرشاشات والحماية من الحرائق
            للمشروعات المختلفة.
          </p>
        </motion.div>

        {/* PLUMBING TEXT */}
        <motion.div
          style={{
            opacity: plumbingTextOpacity,
            x: plumbingTextX,
            y: plumbingTextY,
            scale: plumbingTextScale,
            visibility: plumbingTextVisible,
          }}
          className="absolute left-[8%] top-1/2 z-40 w-[320px] -translate-y-1/2"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-slate-500">03</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-700 md:text-4xl">
            Plumbing
            <br />
            Engineering
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500">
            تصميم وتنفيذ أنظمة الصرف
            وإمداد المياه للمباني والمشروعات.
          </p>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
          }}
          className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Scroll to explore
          </p>
          <motion.div
            className="mx-auto mt-3 h-10 w-px bg-slate-300"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;