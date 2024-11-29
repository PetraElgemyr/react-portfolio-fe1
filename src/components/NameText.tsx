import { Physics } from "@react-three/cannon";
import { Center, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const NameText = () => {
  const { width: w } = useThree((state) => state.viewport);
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const scale = viewport.width < 8 ? viewport.width * 0.25 : 0.9;

  return (
    <Center>
      <Physics gravity={[0, -10, 0]}>
        <Text3D
          position={[0, 0, 0]}
          scale={[scale, scale, scale]}
          ref={ref}
          size={w * 0.085}
          font={"/fonts/Orbitron_ExtraBold_Regular.json"}
          curveSegments={25}
          bevelSegments={10.5}
          bevelEnabled
          bevelSize={viewport.width < 8 ? 0.03 : 0.05}
          bevelThickness={0.7}
          height={viewport.width < 8 ? 0.01 : 0.008}
          lineHeight={1}
          letterSpacing={0.2}
        >
          {`PETRA\n  ELGEMYR`}
          <meshMatcapMaterial color="#E9793A" />
        </Text3D>
      </Physics>
    </Center>
  );
};
