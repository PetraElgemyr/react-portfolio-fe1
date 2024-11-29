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

  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <nav className={`navbar${menuOpen ? "-open" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link to={LinkUrls.HOME} className="nav-link">
              {Pages.HOME}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={LinkUrls.ABOUT} className="nav-item">
              {Pages.ABOUT}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={LinkUrls.PROJECTS} className="nav-item">
              {Pages.PROJECTS}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={LinkUrls.CONTACT} className="nav-item">
              {Pages.CONTACT}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

{
  // const [mobileState, setMobileState] = useState<boolean>(true);
  // const [hamburgerName, setHamburgerName] =
  //   useState<string>("hamburger.inactive");
  // const [navMenuName, setNavMenuName] = useState<string>("nav-menu.inactive");
  // const [mobileActive, setMobileActive] = useState<boolean>(false);
  // const toggleHamburgerName = () => {
  //   if (mobileActive) {
  //     setHamburgerName("hamburger.inactive");
  //     setNavMenuName("nav-menu.inactive");
  //   } else {
  //     setHamburgerName("hamburger.active");
  //     setNavMenuName("nav-menu.active");
  //   }
  //   setMobileActive(!mobileActive);
  // };
  /* 
      <header className="header">
        <nav className="navbar">
          <a href="#home" id="navLogo" className="nav-logo">
            PETRA ELGEMYR
          </a>

          <ul className={navMenuName}>
            <i id="closeBtn" onClick={toggleHamburgerName}>
              &#10006;
            </i>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className={hamburgerName} onClick={toggleHamburgerName}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header> */
}
