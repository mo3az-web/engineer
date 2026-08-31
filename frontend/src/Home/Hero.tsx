import { Canvas } from "@react-three/fiber";

import clsx from "clsx"
import SprinklerView from "./modelsView/fireSprinklerModelViewer";
import { StudioLights } from "./3dHelpers/StudioLight";

const Hero = () => {
  return (
<section className="min-h-screen  [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)]
            [background-size:60px_60px] flex flex-col items-center justify-center px-6">

  {/* 3D Model */}
  <div className="h-[600px] w-full">
      <Canvas
        id="canvas"
        camera={{
          position: [0, 5, 5],
          fov: 50,
          near:0.1,
          far: 100,
        }}
      >
      
<StudioLights/>
        <SprinklerView/>
    
    
      </Canvas>

      </div>

  {/* Text */}
  <div className=" translate-y-0 text-center max-w-2xl">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
      Fire Protection Engineering
    </p>

    <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
      حماية تبدأ من التصميم
    </h1>

    <p className="mt-5 text-lg leading-8 text-slate-600">
      حلول هندسية متخصصة في أنظمة مكافحة وإنذار الحريق،
      مصممة لحماية الأرواح والممتلكات.
    </p>

    <button className="mt-8 rounded-lg bg-red-600 px-7 py-3 font-semibold text-white hover:bg-red-700">
      اطلب استشارة
    </button>
  </div>

</section>
  );
};

export default Hero;