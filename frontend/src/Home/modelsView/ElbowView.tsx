import { PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import ElbowModel from "../../models/Push-fit_90_elbow";

interface ElbowViewProps {
  isHovered: boolean;
}

const ElbowView = ({ isHovered }: ElbowViewProps) => {
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
    if (modelRef.current && isHovered) {
      modelRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <PresentationControls {...controlsConfig}>
      <group ref={modelRef} scale={[40, 40, 40]}>
        <ElbowModel />
      </group>
    </PresentationControls>
  );
};

export default ElbowView;