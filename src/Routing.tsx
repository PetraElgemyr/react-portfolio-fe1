import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ContactPage } from "./components/pages/ContactPage";
import { AboutPage } from "./components/pages/AboutPage";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { Navbar } from "./components/Navbar";
import { SkillsPage } from "./components/pages/SkillsPage";

export const Routing = () => {
  return (
    <Router basename="/">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage isFixed={true} />} />
        <Route path="/contact" element={<ContactPage isFixed={false} />} />
        <Route path="/about" element={<AboutPage isFixed={false} />} />
        <Route path="/portfolio" element={<PortfolioPage isFixed={false} />} />
        <Route path="/skills" element={<SkillsPage isFixed={false} />} />
      </Routes>
    </Router>
  );
};
