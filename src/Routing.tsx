import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ContactPage } from "./components/pages/ContactPage";
import { AboutPage } from "./components/pages/AboutPage";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { Navbar } from "./components/Navbar";
import { SkillsPage } from "./components/pages/SkillsPage";
import { Footer } from "./components/Footer";

export const Routing = () => {
  return (
    <Router basename="/">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};
