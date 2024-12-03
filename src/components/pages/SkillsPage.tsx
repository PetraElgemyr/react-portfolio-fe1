import { StyledLinkButton } from "../../styled/Common/StyledLink";
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FloatingSkillBubble } from "../FloatingSkillBubble";
import {
  DownloadCvButtonContainer,
  SkillPageTitle,
} from "../../styled/Skills/SkillContainer";
import "../../scss/home.scss";

export const SkillsPage = () => {
  const skills = useMemo(
    () => [
      "TypeScript",
      "JavaScript",
      "Html5",
      "NodeJs",
      "CSS",
      "SCSS",
      "ReactJs",
      "C#",
      ".NET",
      "MAUI",
      "WPF",
      "MongoDb",
      "SQLite",
      "GraphQL",
    ],
    []
  );

  // Från ChatGpt med uträkning av positionering
  const maxAttempts = 50;

  const generateUniquePositions = (numBubbles: number) => {
    const positions: [number, number, number][] = [];
    const bubbleRadius = 1.5;

    for (let i = 0; i < numBubbles; i++) {
      let validPosition = false;
      let newPos: [number, number, number] = [0, 0, 0];
      let attempts = 0;

      while (!validPosition && attempts < maxAttempts) {
        newPos = [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
        ];

        validPosition = positions.every((pos) => {
          const distance = Math.sqrt(
            Math.pow(pos[0] - newPos[0], 2) +
              Math.pow(pos[1] - newPos[1], 2) +
              Math.pow(pos[2] - newPos[2], 2)
          );
          return distance >= 2 * bubbleRadius;
        });

        attempts++;
      }

      if (!validPosition) {
        console.warn(
          `Could not place bubble ${i + 1} after ${maxAttempts} attempts`
        );
      }

      positions.push(newPos);
    }

    return positions;
  };

  const positions = useMemo(
    () => generateUniquePositions(skills.length),
    [skills.length]
  );

  return (
    <>
      {/* <PageMarginTop>
        <SkillPageTitle>
          <h1>Skills page</h1>
        </SkillPageTitle>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            margin: 0,
            zIndex: 0,
            position: "absolute",
            top: 0,
          }}
        >
          <Canvas
            style={{ zIndex: 0 }}
            camera={{ position: [0, 0, 20], fov: 80 }}
          >
            <OrbitControls
              enableZoom={false}
              zoomSpeed={1.5}
              enablePan={false}
            />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            {skills.map((skill, i) => (
              <FloatingSkillBubble
                key={i}
                position={positions[i]}
                skill={skill}
              />
            ))}
          </Canvas>
        </div>
        <DownloadCvButtonContainer>
          <StyledLinkButton
            href="./public/PetraElgemyrCv.pdf"
            download={"PetraElgemyrCv.pdf"}
          >
            Click here to download my resume/CV
          </StyledLinkButton>
        </DownloadCvButtonContainer>
      </PageMarginTop> */}
      <SkillPageTitle>
        <h1>Skills page</h1>
      </SkillPageTitle>
      <div className="scene">
        <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
          <OrbitControls enableZoom={false} zoomSpeed={1.5} enablePan={false} />
          <Suspense fallback={"Loading"}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            {skills.map((skill, i) => (
              <FloatingSkillBubble
                key={i}
                position={positions[i]}
                skill={skill}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>
      <DownloadCvButtonContainer>
        <StyledLinkButton
          href="./public/PetraElgemyrCv.pdf"
          download={"PetraElgemyrCv.pdf"}
        >
          Click here to download my resume/CV
        </StyledLinkButton>
      </DownloadCvButtonContainer>
    </>
  );
};
