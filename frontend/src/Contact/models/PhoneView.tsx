import {  useRef } from "react";
import * as THREE from "three";
import { IphoneModel } from "./Phone";
import { PresentationControls } from "@react-three/drei";

const PhoneView = () => {
  const modelRef = useRef<THREE.Group>(null);
  return (
    <PresentationControls
      snap
      speed={1}
      zoom={1}
      azimuth={[-Infinity, Infinity]}
   
    >
      <group ref={modelRef} scale={1}
      rotation={[-.01, Math.PI / 1, 0]}
      
      >
        <IphoneModel   scale={50}  />
        <axesHelper />
      </group>
    </PresentationControls>
  );
};

export default PhoneView;