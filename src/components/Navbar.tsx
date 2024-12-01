import { Link } from "react-router-dom";
import { Pages } from "./enums/Pages";
import { LinkUrls } from "./enums/LinkUrls";
import "../scss/navbar.scss";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    console.log(menuOpen, "sätter till ", !menuOpen);

    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutsideMenu = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <>
      <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
        <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <nav ref={menuRef} className={`navbar${menuOpen ? "-open" : ""}`}>
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
