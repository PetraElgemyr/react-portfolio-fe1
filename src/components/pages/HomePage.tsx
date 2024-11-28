import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { NameText } from "../NameText";
import "../../scss/home.scss";

export const HomePage = () => {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, 8], fov: 100 }}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.3}
          enablePan={false}
          zoomSpeed={0.2}
          dampingFactor={0.1}
        />
        <Suspense fallback={"Loading"}>
          <NameText />
        </Suspense>
      </Canvas>
    </div>
  );
};
