
import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import SprinklerView from "./modelsView/fireSprinklerModelViewer";
import { StudioLights } from "./3dHelpers/StudioLight";

import AcView from "./modelsView/AcUnitView";
import ElbowView from "./modelsView/ElbowView";


// ======================================================
// HOOK
// Desktop = hover
// Mobile  = viewport
// ======================================================

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
};


// ======================================================
// AC MODEL
// ======================================================

const AcModel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  const [isHovered, setIsHovered] = useState(false);

  // Mobile -> viewport
  // Desktop -> hover
  const isActive = isMobile ? isInView : isHovered;

  return (
    <div
      ref={ref}
      className="flex min-w-0 flex-col items-center"
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
        }
      }}
    >
      <div className="relative h-[400px] w-full overflow-hidden">

        {/* ================= PNG ================= */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
            transition-[clip-path,opacity]
            duration-1000
            ease-out

            ${
              isActive
                ? "[clip-path:inset(0_0_0%_0)] opacity-100"
                : "[clip-path:inset(0_0_100%_0)] opacity-0"
            }
          `}
        >
          <img
            src="/AC.png"
            alt=""
            className="
              absolute
              left-1/2
              top-1/2
              w-100
              -translate-x-1/2
              -translate-y-1/2
              object-contain
            "
          />
        </div>


        {/* ================= 3D ================= */}

        <div className="relative z-10 h-full w-full">
          <Canvas
            camera={{
              position: [0, 5, 5],
              fov: 50,
              near: 0.1,
              far: 100,
            }}
            gl={{ alpha: true }}
          >
            <StudioLights />

            <AcView isHovered={isActive} />
          </Canvas>
        </div>

      </div>


      {/* ================= TEXT ================= */}

      <div className="mt-2 px-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Refrigeration and Air Conditioning Engineering
        </p>

        <p className="mt-2 text-sm text-slate-500">
          تصميم وتنفيذ أنظمة التكييف والتهوية
        </p>
      </div>
    </div>
  );
};


// ======================================================
// PLUMBING MODEL
// ======================================================

const PlumbingModel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  const [isHovered, setIsHovered] = useState(false);

  const isActive = isMobile ? isInView : isHovered;

  return (
    <div
      ref={ref}
      className="flex min-w-0 flex-col items-center"
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
        }
      }}
    >
      <div className="relative h-[400px] w-full overflow-hidden">

        {/* ================= PNG ================= */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
            transition-[clip-path,opacity]
            duration-1000
            ease-out

            ${
              isActive
                ? "[clip-path:inset(0_0_0%_0)] opacity-100"
                : "[clip-path:inset(0_0_100%_0)] opacity-0"
            }
          `}
        >
          <img
            src="/MEB.png"
            alt=""
            className="
              absolute
              left-1/2
              top-1/2
              w-100
              -translate-x-1/2
              -translate-y-1/2
              object-contain
            "
          />
        </div>


        {/* ================= 3D ================= */}

        <div className="relative z-10 h-full w-full">
          <Canvas
            camera={{
              position: [0, 5, 5],
              fov: 50,
              near: 0.1,
              far: 100,
            }}
            gl={{ alpha: true }}
          >
            <StudioLights />

            <ElbowView isHovered={isActive} />
          </Canvas>
        </div>

      </div>


      {/* ================= TEXT ================= */}

      <div className="mt-2 px-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
          Plumbing Engineering
        </p>

        <p className="mt-2 text-sm text-slate-500">
          تصميم و تنفيذ انظمة الصرف و امداد المياة
        </p>
      </div>
    </div>
  );
};


// ======================================================
// FIRE MODEL
// ======================================================

const FireModel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  const [isHovered, setIsHovered] = useState(false);

  const isActive = isMobile ? isInView : isHovered;

  return (
    <div
      ref={ref}
      className="flex min-w-0 flex-col items-center"
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
        }
      }}
    >
      <div className="relative h-[400px] w-full overflow-hidden">

        {/* ================= PNG ================= */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
            transition-[clip-path,opacity]
            duration-1000
            ease-out

            ${
              isActive
                ? "[clip-path:inset(0_0_0%_0)] opacity-100"
                : "[clip-path:inset(0_0_100%_0)] opacity-0"
            }
          `}
        >
          <img
            src="/fire.png"
            alt=""
            className="
              absolute
              left-1/2
              top-1/2
              w-100
              -translate-x-1/2
              -translate-y-1/2
              object-contain
            "
          />
        </div>


        {/* ================= 3D ================= */}

        <div className="relative z-10 h-full w-full">
          <Canvas
            camera={{
              position: [0, 5, 5],
              fov: 50,
              near: 0.1,
              far: 100,
            }}
            gl={{ alpha: true }}
          >
            <StudioLights />

            <SprinklerView isHovered={isActive} />
          </Canvas>
        </div>

      </div>


      {/* ================= TEXT ================= */}

      <div className="mt-2 px-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Fire Protection Engineering
        </p>

        <p className="mt-2 text-sm text-slate-500">
          تصميم وتنفيذ أنظمة الإطفاء والرشاشات
        </p>
      </div>
    </div>
  );
};


// ======================================================
// HERO
// ======================================================

const Hero = () => {
  return (
    <section
      className="
        min-h-screen
        [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)]
        [background-size:60px_60px]
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-16
      "
    >

      {/* ==================================================
          3D MODELS
      ================================================== */}

      <div
        className="
          grid
          w-full
          max-w-7xl
          grid-cols-1

          gap-[80px]

          md:grid-cols-3
          md:gap-8
        "
      >

        {/* ================= AC ================= */}

        <div className="order-1 md:order-2">
          <AcModel />
        </div>


        {/* ================= PLUMBING ================= */}

        <div className="order-2 md:order-1">
          <PlumbingModel />
        </div>


        {/* ================= FIRE ================= */}

        <div className="order-3 md:order-3">
          <FireModel />
        </div>

      </div>


      {/* ==================================================
          HERO TEXT
      ================================================== */}

      <div className="mt-16 max-w-2xl text-center">

        <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
          حماية تبدأ من التصميم
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          حلول هندسية متخصصة في أنظمة مكافحة وإنذار الحريق،
          مصممة لحماية الأرواح والممتلكات.
        </p>

        <button
          className="
            mt-8
            rounded-lg
            bg-red-600
            px-7
            py-3
            font-semibold
            text-white
            transition
            hover:bg-red-700
          "
        >
          اطلب استشارة
        </button>

      </div>

    </section>
  );
};

export default Hero;
