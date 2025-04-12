import { useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./components/contexts/AppContext";
import { Routing } from "./Routing";
import { IProject } from "./components/interfaces/IProject";

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    setProjects([
      {
        id: 6,
        name: "Project Managent - Alpha",
        description:
          "A fullstack MVC project in ASP.NET — my first experience with the framework. The goal was to complete as much as possible before a deadline while learning to work with more complex solutions. I integrated tools such as the WYSIWYG editor Quill, Azure Blob Storage, and Identity. The project started with a local SQL Server database and was later deployed to Azure, including database and storage services.",
        github: "https://github.com/PetraElgemyr/Assignment-aspnet",
        liveLink: "",
        img: "/projectmanagement-add-project.png",
        techniques: [
          "ASP.NET",
          "C#",
          "SQL",
          "Identity",
          "SignalR",
          "Entity Framework Core",
          "Quill WYSIWYG Editor",
          "Azure Blob Storage",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      {
        id: 5,
        name: "Database Design",
        description:
          "This assignment had focus on database normalization rules. I had to have at least 15 entities and got to learn how do divide data according to the normalization rules. The front end part was not a priority and was not graded. The main goal was to learn how to create a good database design according to SOLID. It should be easy to scale up and add functionality and the code should be structured in multiple projects, class libraries and a presentation layer. I also made integration tests to the CRUD functionality.",
        github: "https://github.com/PetraElgemyr/databasteknik-assignment",
        img: "/databasteknik.png",
        techniques: [
          "SqlServer",
          "C#",
          "Entity Framework Core",
          "React",
          "Typescript",
        ],
      },
      {
        id: 4,
        name: "Bokgninsystem Bakgården",
        description:
          "This is a fullstack project which I made together with Jennifer McAllister. We made the entire design, front-end and back-end parts from scratch. We used NodeJs and a MongoDb database with vanilla javascript. For the front-end part we used React and typescript, along with some styled components. This is our first assignment working with context and reducer combined. We also tried to work agile with daily standups and github for pull requests and branches.",
        github: "https://github.com/PetraElgemyr/restaurant-fullstack",
        img: "/restaurant-book-table.jpg",
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
        id: 3,
        name: "Bff Strays",
        description:
          "A re-make of the existing site for Bff Strays. Bff Strays is a non-profit organization that focuses on giving stray dogs from Spain new homes in Sweden. Instead of the bright pink color they used on their website 2023, I wanted to create something more calm and animal oriented. I used Contentful CMS for managing the content instead of setting up a database, mostly due to insufficient time.",
        github: "https://github.com/PetraElgemyr/bffstrays",
        liveLink: "https://bffstrays.vercel.app/",
        img: "/bffstrays-start.png",
        techniques: [
          "TypeScript",
          "Contentful CMS",
          "React",
          "Styled Components",
        ],
      },
      {
        id: 2,
        name: "Movie API",
        description:
          "MovieAPI is my first time working with an api and a very basic fullstack project. The site presents a list of well known movies. You can search for movies to see if they are on the list, show the list and add movies to the list. The project is made with JavaScript and GraphQL, which I use Apollo Server for. The data is stored in Google Sheet with SheetDB. This was only for learning purposes.",
        github: "https://github.com/PetraElgemyr/graphql-exercise",
        img: "/movieapi.jpg",
        techniques: ["GraphQL", "Apollo Server", "JavaScript", "CSS"],
      },
      {
        id: 1,
        name: "Smartare än en PH-deltagare",
        description:
          'An assignment to make a quiz with basic frontend tools. I decided to create a parody of "Smartare än en femteklassare" with Paradise Hotel participants. The site is of course adaptable to different screen sizes, developed with mobile first.',
        github: "https://github.com/PetraElgemyr/react-quiz-fe2",
        liveLink: "https://smartare-an-en-ph-deltagare.netlify.app/",
        img: "/smartare-an-en-phdeltagare.3489ea46.png",
        techniques: ["TypeScript", "React", "Mui", "Styled Components", "SCSS"],
      },
      // {
      //   id: 6,
      //   name: "Köksmästarn Webshop",
      //   description:
      //     'This webshop was my first agile group project. The assignment was to create a webshop that could simulate a purchase. The customer can add products to the shoppingcart, sort the products and "purchase" the chosen products. This project was made with Maisah Juevesano and Hama Jaff.',
      //   github: "https://github.com/maisahjuevesano/AgiltProjektarbete",
      //   liveLink: "https://koksmastarn.netlify.app/",
      //   img: "https://elgemyrs.netlify.app/kmaster1.73086324.jpg",
      //   techniques: ["TypeScript", "SCSS"],
      // },
    ]);
  }, []);

  const contextValue = {
    projects,
    setProjects,
    activePage,
    setActivePage,
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
