import { Link } from "react-router-dom";
import { Pages } from "./enums/Pages";
import { LinkUrls } from "./enums/LinkUrls";
import "../scss/navbar.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppContext } from "./hooks/useAppContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const { setActivePage, activePage } = useAppContext();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = useCallback(
    (activePage: Pages) => {
      setMenuOpen(false);
      setActivePage(activePage);
    },
    [setActivePage]
  );
  // const closeMenu = (activePage: Pages) => {
  //   setMenuOpen(false);
  //   setActivePage(activePage);
  // };

  useEffect(() => {
    const handleClickOutsideMenu = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        closeMenu(activePage);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [activePage, setActivePage, closeMenu]);

  return (
    <>
      <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
        <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <nav ref={menuRef} className={`navbar${menuOpen ? "-open" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link
              to={LinkUrls.HOME}
              onClick={() => closeMenu(Pages.HOME)}
              className="nav-link"
            >
              {Pages.HOME}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={LinkUrls.ABOUT}
              onClick={() => closeMenu(Pages.ABOUT)}
              className="nav-link"
            >
              {Pages.ABOUT}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={LinkUrls.SKILLS}
              onClick={() => closeMenu(Pages.SKILLS)}
              className="nav-link"
            >
              {Pages.SKILLS}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={LinkUrls.PORTFOLIO}
              onClick={() => closeMenu(Pages.PORTFOLIO)}
              className="nav-link"
            >
              {Pages.PORTFOLIO}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={LinkUrls.CONTACT}
              onClick={() => closeMenu(Pages.CONTACT)}
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
