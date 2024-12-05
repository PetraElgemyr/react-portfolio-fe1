import { useRef } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { colors } from "../styled/Variables/Colors";

extend({ SphereGeometry: THREE.SphereGeometry });

interface IFloatingSkillBubble {
  position: [number, number, number];
  skill: string;
}

export const FloatingSkillBubble = ({
  position,
  skill,
}: IFloatingSkillBubble) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5; // Floating effect
    }
  });

  const textMaterial = new THREE.MeshBasicMaterial({
    color: "white",
    depthWrite: false,
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[1.5, 20, 20]} />
      <meshStandardMaterial
        color={colors.secondary_orange}
        transparent
        opacity={1}
      />

      <Text
        fontWeight={"bold"}
        position={[0, 0, 1.5]} // z position lite framför mitten (1,5 pga är min radie), ej mindre än 1.5! kommer ej synas då
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        renderOrder={10} // ska renderas längst fram så att det syns framför mina bubblor
        material={textMaterial}
      >
        {skill}
      </Text>
    </mesh>
  );
};
