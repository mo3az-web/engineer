import { PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";
import AcModel from "../../models/Free_ac_unit";

interface AcUnitViewProps {
  scrollRotation: MotionValue<number>;
}

const AcViewNoHover = ({ scrollRotation }: AcUnitViewProps) => {
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

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scrollRotation.get();
    }
  });

  return (
    <PresentationControls {...controlsConfig}>
      <group ref={modelRef} scale={[1, 1, 1]}>
        <AcModel />
      </group>
    </PresentationControls>
  );
};

export default AcViewNoHover;