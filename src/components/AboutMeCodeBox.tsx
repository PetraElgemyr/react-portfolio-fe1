import { useEffect, useState } from "react";
import "../scss/about.scss";
import { CodeBoxWrapper, CodeBox } from "../styled/About/CodeBox";

const textToType = [
  { text: "#about-me {", className: "orange" },
  { text: "  name: ", className: "blue" },
  { text: '"Petra Elgemyr";', className: "default", sameLine: true },
  { text: "  age: ", className: "blue" },
  { text: "22;", className: "green default", sameLine: true },
  { text: "  location: ", className: "blue" },
  { text: '"Stockholm";', className: "default", sameLine: true },
  { text: "  likes: ", className: "blue" },
  {
    text: '"dogs, sushi and playing the piano";',
    className: "default",
    sameLine: true,
  },
  { text: "}", className: "orange" },
  { text: ".education {", className: "orange" },
  { text: "  school: ", className: "blue" },
  { text: '"Medieinstitutet";', className: "default", sameLine: true },
  { text: "  program: ", className: "blue" },
  { text: '"front-end developer";', className: "default", sameLine: true },
  { text: "  graduation: ", className: "blue" },
  { text: "2024;", className: "green default", sameLine: true },
  { text: "}", className: "orange" },
  { text: ".current-education {", className: "orange" },
  { text: "  school: ", className: "blue" },
  { text: '"Nackademin";', className: "default", sameLine: true },
  { text: "  program: ", className: "blue" },
  { text: '".NET web developer";', className: "default", sameLine: true },
  { text: "  graduation: ", className: "blue" },
  { text: "2026;", className: "green default", sameLine: true },
  { text: "}", className: "orange-unset-width", last: true },
];

export const AboutMeCodeBox = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 65);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Från chatgpt
  const groupedLines: { spans: { text: string; className: string }[] }[] = [];
  textToType.slice(0, currentIndex).forEach((line) => {
    if (line.sameLine && groupedLines.length > 0) {
      groupedLines[groupedLines.length - 1].spans.push({
        text: line.text,
        className: line.className,
      });
    } else {
      groupedLines.push({
        spans: [{ text: line.text, className: line.className }],
      });
    }
  });

  return (
    <CodeBoxWrapper>
      <CodeBox className="about">
        {groupedLines.map((group, index) => (
          <p key={index}>
            {group.spans.map((span, spanIndex) => (
              <span key={spanIndex} className={span.className}>
                {span.text}
              </span>
            ))}
            {index === groupedLines.length - 1 && (
              <span className="caret">|</span>
            )}
          </p>
        ))}
      </CodeBox>
    </CodeBoxWrapper>
  );
};
