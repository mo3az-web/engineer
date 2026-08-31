
import { PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import SprinklerModel from "../../models/Fire_sprinkler";

const SprinklerView = () => {
  const modelRef = useRef<THREE.Group>(null);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity] as [number, number],
    config: {
      mass: 1,
      tension: 0,
      friction: 26,
    },
  };

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <PresentationControls {...controlsConfig}>
      <group ref={modelRef} scale={[.2, .2, .2]}>
        <SprinklerModel />
      </group>
    </PresentationControls>
  );
};

export default SprinklerView;

