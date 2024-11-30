import { useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./components/contexts/AppContext";
import { Routing } from "./Routing";
import { IProject } from "./components/interfaces/IProject";

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        name: "Bakgården",
        description:
          "This is a fullstack project which I made together with Jennifer McAllister. We made the entire design, front-end and back-end parts from scratch. We used NodeJs and a MongoDb database with vanilla javascript. For the front-end part we used React and typescript, along with some styled components. This is our first assignment working with context and reducer combined. We also tried to work agile with daily standups and github for pull requests and branches.",
        github: "https://github.com/PetraElgemyr/restaurant-fullstack",
        img: "https://petraelgemyr.netlify.app/restaurant-book-table.c1206070.jpg",
        techniques: [
          "TypeScript",
          "React",
          "JavaScript",
          "NodeJs",
          "MongoDb",
          "CSS",
          "Styled Components",
        ],
      },
      {
        id: 2,
        name: "Remake of my todo list",
        description:
          "The goal with this assignment was to practice code refactoring. I used an old project and converted javascript to typescript and tried to refactor as much of the code as possible in the time given. This is a todo list where you can add todos through the input box or else the user will get an error message. The todo tasks can be marked as finished and can be removed to the removed list. Both the lists can be emptied and they can be sorted in alphabetical order.",
        github: "https://github.com/PetraElgemyr/arbetsmetodik-assignment-2",
        liveLink: "https://petrastodolist.netlify.app/",
        img: "https://petraelgemyr.netlify.app/todo2.8fe83784.jpg",
        techniques: ["TypeScript", "SCSS"],
      },
      {
        id: 3,
        name: "Movie API",
        description:
          "MovieAPI is a basic fullstack project. The site presents a list of well known movies. You can search for movies to see if they are on the list, show the list and add movies to the list. The project is made with JavaScript and GraphQL, which I use Apollo Server for. The data is stored in Google Sheet with SheetDB.",
        github: "https://github.com/PetraElgemyr/graphql-exercise",
        img: "      https://petraelgemyr.netlify.app/api2.0d6a1f7f.jpg",
        techniques: ["GraphQL", "JavaScript", "CSS"],
      },
      {
        id: 4,
        name: "Köksmästarn Webshop",
        description:
          'This webshop was my first agile group project. The assignment was to create a webshop that could simulate a purchase. The customer can add products to the shoppingcart, sort the products and "purchase" the chosen products. This project was made with Maisah Juevesano and Hama Jaff.',
        github: "https://github.com/maisahjuevesano/AgiltProjektarbete",
        liveLink: "https://koksmastarn.netlify.app/",
        img: "https://petraelgemyr.netlify.app/kmaster1.73086324.jpg",
        techniques: ["TypeScript", "SCSS"],
      },
    ]);
  }, []);

  const contextValue = {
    projects,
    setProjects,
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <Routing></Routing>
      </AppContext.Provider>
    </>
  );
}

export default App;
