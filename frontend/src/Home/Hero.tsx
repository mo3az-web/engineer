import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
// CANVAS CONFIG
// ======================================================

const canvasConfig = {
  camera: {
    position: [0, 5, 5] as [number, number, number],
    fov: 50,
    near: 0.1,
    far: 100,
  },
  gl: {
    alpha: true,
    antialias: true,
  },
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

  const isActive = isMobile ? isInView : isHovered;

  return (
    <div
      ref={ref}
      className="flex min-w-0 flex-col items-center bg-transparent"
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
      <div className="relative h-[400px] w-full overflow-hidden bg-transparent">
        {/* PNG */}
        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
            bg-transparent
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

        {/* 3D */}
        <div className="relative z-10 h-full w-full bg-transparent">
          <Canvas
            camera={canvasConfig.camera}
            gl={canvasConfig.gl}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <StudioLights />
            <AcView isHovered={isActive} />
          </Canvas>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-2 px-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
          Refrigeration and Air Conditioning Engineering
        </p>

        <p className="mt-2 text-sm text-blue-800/70">
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
      className="flex min-w-0 flex-col items-center bg-transparent"
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
      <div className="relative h-[400px] w-full overflow-hidden bg-transparent">
        {/* PNG */}
        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
            bg-transparent
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

        {/* 3D */}
        <div className="relative z-10 h-full w-full bg-transparent">
          <Canvas
            camera={canvasConfig.camera}
            gl={canvasConfig.gl}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <StudioLights />
            <ElbowView isHovered={isActive} />
          </Canvas>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-2 px-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
          Plumbing Engineering
        </p>

        <p className="mt-2 text-sm text-blue-800/70">
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
      className="flex min-w-0 flex-col items-center bg-transparent"
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
      <div className="relative h-[400px] w-full overflow-hidden bg-transparent">
        {/* PNG */}
        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
            bg-transparent
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

        {/* 3D */}
        <div className="relative z-10 block h-full w-full cursor-pointer bg-transparent">
          <Canvas
            camera={canvasConfig.camera}
            gl={canvasConfig.gl}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <StudioLights />
            <SprinklerView isHovered={isActive} />
          </Canvas>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-2 px-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
          Fire Protection Engineering
        </p>

        <p className="mt-2 text-sm text-blue-800/70">
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
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-white
        px-6
        py-16
      "
    >
      {/* ==================================================
          BACKGROUND DESIGN
      ================================================== */}

      {/* Black Engineering Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.035]
          bg-[linear-gradient(to_right,rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,1)_1px,transparent_1px)]
          bg-[size:65px_65px]
        "
      />

      {/* Decorative Circle */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          z-0
          h-[550px]
          w-[550px]
          rounded-full
          border
          border-black/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          z-0
          h-[390px]
          w-[390px]
          rounded-full
          border
          border-black/[0.07]
        "
      />

      {/* Left Engineering Line */}
      <div className="pointer-events-none absolute left-8 top-1/2 z-0 hidden -translate-y-1/2 flex-col items-center md:left-14 md:flex">
        <div className="h-28 w-px bg-black/15" />

        <div className="my-4 h-2 w-2 rotate-45 border border-black/30" />

        <div className="h-24 w-px bg-black/15" />
      </div>

      {/* Right Decorative Line */}
      <div className="pointer-events-none absolute right-8 top-1/3 z-0 hidden md:right-14 md:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-black/15" />

          <span className="text-[9px] tracking-[0.4em] text-black/40">
            welcome
          </span>
        </div>

        <div className="ml-14 mt-3 h-20 w-px bg-black/10" />
      </div>

      {/* ==================================================
          3D MODELS
      ================================================== */}

      <div
        className="
          relative
          z-10
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-[80px]
          bg-transparent
          md:grid-cols-3
          md:gap-8
        "
      >
        {/* AC */}
        <div className="order-1 bg-transparent md:order-2">
          <AcModel />
        </div>

        {/* Plumbing */}
        <div className="order-2 bg-transparent md:order-1">
          <PlumbingModel />
        </div>

        {/* Fire */}
        <div className="order-3 bg-transparent md:order-3">
          <FireModel />
        </div>
      </div>

      {/* ==================================================
          HERO TEXT
      ================================================== */}

      <div className="relative z-10 mt-16 max-w-2xl text-center">
        <h1 className="mt-4 text-4xl font-bold text-black md:text-6xl">
          حماية تبدأ من التصميم
        </h1>

        <p className="mt-5 text-lg leading-8 text-blue-800/80">
          نحن نقدم حلول هندسية متكاملة في مجالات التكييف والتهوية، الصرف
          الصحي، وإطفاء الحرائق. فريقنا من المهندسين المتخصصين يضمن تصميم
          وتنفيذ أنظمة فعالة وآمنة لمشاريعكم.
        </p>

        <Link
          to="/contact"
          className="
            mt-8
            inline-flex
            items-center
            justify-center
            rounded-lg
            bg-black
            px-7
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-blue-800
          "
        >
          اطلب استشارة
        </Link>
      </div>
    </section>
  );
};

export default Hero;