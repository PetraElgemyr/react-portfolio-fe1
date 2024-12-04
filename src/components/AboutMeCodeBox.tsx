import "../scss/about.scss";
import { CodeBoxWrapper, CodeBox } from "../styled/About/CodeBox";

export const AboutMeCodeBox = () => {
  return (
    <>
      <CodeBoxWrapper>
        <CodeBox className="about">
          <span className="orange">#about-me {"{"} </span>
          <p className="-indent">
            <span className="blue">name: </span>
            <span>"Petra Elgemyr"</span>
            <span className="white"> ; </span>
          </p>
          <p className="-indent">
            <span className="blue">age: </span>
            <span className="green">22</span>
            <span className="white"> ; </span>
          </p>
          <p className="-indent">
            <span className="blue">location: </span>
            <span>"Stockholm"</span>
            <span className="white"> ; </span>
          </p>
          <p className="-indent">
            <span className="blue">likes: </span>
            <span>"dogs, sushi and playing the piano"</span>
            <span className="white"> ; </span>
          </p>
          <p className="ed">
            <span className="orange"> {"}"} </span>
          </p>
          <p className="ed">
            <span className="orange">.education {"{"}</span>
          </p>
          <p className="-indent">
            <span className="blue">school: </span>
            <span>"Medieinstitutet"</span>
            <span className="white"> ; </span>
          </p>
          <p className="-indent">
            <span className="blue">program:</span>
            <span>"front-end developer"</span>
            <span className="white"> ; </span>
          </p>
          <p className="-indent">
            <span className="blue">expected graduation: </span>
            <span className="green">2024</span>
            <span className="white"> ; </span>
          </p>
          <p className="ed">
            <span className="orange"> {"}"}</span>
          </p>
        </CodeBox>
      </CodeBoxWrapper>
    </>
  );
};
