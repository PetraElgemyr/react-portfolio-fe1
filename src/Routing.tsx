import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";

export const Routing = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
