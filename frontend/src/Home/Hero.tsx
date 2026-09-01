import { Canvas } from "@react-three/fiber";
import SprinklerView from "./modelsView/fireSprinklerModelViewer";
import { StudioLights } from "./3dHelpers/StudioLight";

import AcView from "./modelsView/AcUnitView";
import ElbowView from "./modelsView/ElbowView";
import { useState } from "react";
const Hero = () => {

  const [elbowHovered, setElbowHovered] = useState(false);
  const [acHovered, setAcHovered] = useState(false);
  const [fireSprinklerHovered, setFireSprinklerHovered] = useState(false);
  return (
    <section
      className="
        min-h-screen
        [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)]
        [background-size:60px_60px]
        flex flex-col
        items-center
        justify-center
        px-6
        py-16
      "
    >
      {/* 3D Models */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">

{/* ELBOW COMPONENT */}
<div className="group flex min-w-0 flex-col items-center
"

onMouseEnter={() => setElbowHovered(true)}
  onMouseLeave={() => setElbowHovered(false)}>


  {/* Model Area */}
  <div className="relative h-[400px] w-full overflow-hidden">

    {/* PNG */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
        [clip-path:inset(0_0_100%_0)]
        transition-[clip-path]
        duration-1000
        ease-out
        group-hover:[clip-path:inset(0_0_0%_0)]
      "
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
        <ElbowView isHovered={elbowHovered} />
      </Canvas>
    </div>

  </div>

  {/* Text */}
  <div className="mt-2 px-2 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
      MEP Engineering
    </p>

    <p className="mt-2 text-sm text-slate-500">
      تصميم و تنفيذ انظمة الصرف و امداد المياة
    </p>
  </div>

</div>
        {/* ================= AC UNIT ================= */}
        <div className="group flex min-w-0 flex-col items-center"
        
        onMouseEnter={() => setAcHovered(true)}
  onMouseLeave={() => setAcHovered(false)}>


          <div className="relative h-[400px] w-full overflow-hidden">

            {/* PNG - UNDER THE 3D MODEL */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-0
                overflow-hidden
                [clip-path:inset(0_0_100%_0)]
                transition-[clip-path]
                duration-1000
                ease-out
                group-hover:[clip-path:inset(0_0_0%_0)]
              "
            >
              <img
                src="/AC.png"
                alt=""
                onError={(e) => {
                  console.error(
                    "AC image failed to load. Check that the file exists at /public/Ac.png and that the filename casing matches exactly.",
                    e
                  );
                }}
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

            {/* 3D MODEL - ABOVE PNG */}
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
                <AcView isHovered={acHovered} />
              </Canvas>
            </div>

          </div>

          {/* AC Text */}
          <div className="mt-2 px-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Refrigeration and Air Conditioning Engineering
            </p>

            <p className="mt-2 text-sm text-slate-500">
              تصميم وتنفيذ أنظمة التكييف والتهوية
            </p>
          </div>
        </div>


        {/* ================= FIRE SPRINKLER ================= */}
        <div className="group flex min-w-0 flex-col items-center"
        
        onMouseEnter={() => setFireSprinklerHovered(true)}
  onMouseLeave={() => setFireSprinklerHovered(false)}>


          <div className="relative h-[400px] w-full overflow-hidden">

            {/* FIRE PNG - UNDER THE 3D MODEL */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-0
                overflow-hidden

                [clip-path:inset(0_0_100%_0)]
                transition-[clip-path]
                duration-1000
                ease-out

                group-hover:[clip-path:inset(0_0_0%_0)]
              "
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

            {/* 3D MODEL - ABOVE PNG */}
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
                <SprinklerView isHovered={fireSprinklerHovered} />
              </Canvas>
            </div>

          </div>

          {/* Sprinkler Text */}
          <div className="mt-2 px-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Fire Protection Engineering
            </p>

            <p className="mt-2 text-sm text-slate-500">
              تصميم وتنفيذ أنظمة الإطفاء والرشاشات
            </p>
          </div>
        </div>

      </div>

  

      {/* Hero Text */}
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