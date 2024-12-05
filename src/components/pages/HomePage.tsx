import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { NameText } from "../NameText";
import "../../scss/home.scss";
import { Footer } from "../Footer";
import { IIsFixedNavbarProps } from "../interfaces/IIsFixedNavbarProps";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export const HomePage = ({ isFixed }: IIsFixedNavbarProps) => {
  const location = useLocation();
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname, setActivePage]);

  return (
    <>
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
      <Footer isFixed={isFixed}></Footer>
    </>
  );
};
