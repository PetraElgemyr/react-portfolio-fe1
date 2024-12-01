import { Link } from "react-router-dom";
import { Pages } from "./enums/Pages";
import { LinkUrls } from "./enums/LinkUrls";
import "../scss/navbar.scss";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <nav className={`navbar${menuOpen ? "-open" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link to={LinkUrls.HOME} onClick={closeMenu} className="nav-link">
              {Pages.HOME}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={LinkUrls.ABOUT} onClick={closeMenu} className="nav-link">
              {Pages.ABOUT}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={LinkUrls.SKILLS} onClick={closeMenu} className="nav-link">
              {Pages.SKILLS}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={LinkUrls.PORTFOLIO}
              onClick={closeMenu}
              className="nav-link"
            >
              {Pages.PORTFOLIO}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={LinkUrls.CONTACT}
              onClick={closeMenu}
              className="nav-link"
            >
              {Pages.CONTACT}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
