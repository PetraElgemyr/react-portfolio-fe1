import { StyledLinkButton } from "../../styled/Common/StyledLink";
import { Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FloatingSkillBubble } from "../FloatingSkillBubble";
import {
  DownloadCvButtonContainer,
  SkillPageTitle,
} from "../../styled/Skills/SkillContainer";
import "../../scss/home.scss";
import { Footer } from "../Footer";
import { IIsFixedNavbarProps } from "../interfaces/IIsFixedNavbarProps";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import {
  ReferenceContainer,
  ReferenceText,
  ReferenceTextName,
} from "../../styled/Skills/ReferencesContainer";

export const SkillsAndReferencesPage = ({ isFixed }: IIsFixedNavbarProps) => {
  const location = useLocation();
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname, setActivePage]);

  const skills = useMemo(
    () => [
      "TypeScript",
      "JavaScript",
      "Html5",
      "NodeJs",
      "CSS",
      "ReactJs",
      "SqlServer",
      "xUnit",
      "Entity Framework Core",
      "C#",
      "Azure DevOps",
      "gRPC",
      "ASP.NET Core Web API",
      "ASP.NET MVC",
      "MAUI",
      "WPF",
      "MongoDb",
      "TSQL",
      "GraphQL",
      "REST API",
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
      <SkillPageTitle>
        <h1>Skills and references</h1>
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
          href="./Petra-Elgemyr-Webbutvecklare-cv.pdf"
          download={"PetraElgemyrCv.pdf"}
        >
          Click here to download my resume/CV
        </StyledLinkButton>
      </DownloadCvButtonContainer>
      <ReferenceContainer>
        <h2>References</h2>
        <ReferenceTextName>{`Johanna Back, enhetschef it-utveckling på Sveriges Riksdag: `}</ReferenceTextName>
        <ReferenceText>{`"Petra har gjort två praktikperioder (LIA 1&2) under 2023-2024 hos oss på Riksdagsförvaltningen. 
        Under bägge praktiktillfällena har hon arbetat med systemutveckling gällande ny- och vidareutveckling inom både projekt
         och förvaltning. Petra har arbetat i ett agilt utvecklingsteam med programmering i främst React och TypeScript. 
         Petra har varit ett positivt bidrag till teamet och levererat stor nytta. Just nu har vi ingen möjlighet att själva anställa 
         henne men skulle gärna vilja det om det blir tillfälle längre fram. Vi ger med nöje våra allra bästa rekommendationer och önskar 
         henne lycka till framöver."`}</ReferenceText>
      </ReferenceContainer>
      <Footer isFixed={isFixed}></Footer>
    </>
  );
};
