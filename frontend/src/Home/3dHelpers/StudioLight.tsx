
import { Environment, Lightformer } from "@react-three/drei";

export const StudioLights = () => {
  return (
    <group name="lights">

      <Environment resolution={256}>

        {/* Front / Key Light */}
        <Lightformer
          form="rect"
          intensity={4}
          position={[0, 2, 5]}
          scale={[5, 5, 1]}
          rotation={[0, 0, 0]}
        />

        {/* Left / Fill Light */}
        <Lightformer
          form="rect"
          intensity={2}
          position={[-5, 1, 2]}
          scale={[3, 3, 1]}
          rotation={[0, Math.PI / 2, 0]}
        />

        {/* Right / Fill Light */}
        <Lightformer
          form="rect"
          intensity={2}
          position={[5, 1, 2]}
          scale={[3, 3, 1]}
          rotation={[0, -Math.PI / 2, 0]}
        />

        {/* Top Light */}
        <Lightformer
          form="rect"
          intensity={3}
          position={[0, 5, 0]}
          scale={[4, 4, 1]}
          rotation={[Math.PI / 2, 0, 0]}
        />

      </Environment>

    </group>
  );
};

