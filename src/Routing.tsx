import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ContactPage } from "./components/pages/ContactPage";
import { AboutPage } from "./components/pages/AboutPage";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { Navbar } from "./components/Navbar";
import { SkillsPage } from "./components/pages/SkillsPage";
import { useAppContext } from "./components/hooks/useAppContext";
import { LinkUrls } from "./components/enums/LinkUrls";

export const Routing = () => {
  const { activePage } = useAppContext();

  const isStartPage = activePage === LinkUrls.HOME ? true : false;

  return (
    <Router basename="/">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage isFixed={isStartPage} />} />
        <Route
          path="/contact"
          element={<ContactPage isFixed={isStartPage} />}
        />
        <Route path="/about" element={<AboutPage isFixed={isStartPage} />} />
        <Route
          path="/portfolio"
          element={<PortfolioPage isFixed={isStartPage} />}
        />
        <Route path="/skills" element={<SkillsPage isFixed={isStartPage} />} />
      </Routes>
    </Router>
  );
};
