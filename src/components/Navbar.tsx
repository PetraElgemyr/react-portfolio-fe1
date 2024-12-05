import { Link } from "react-router-dom";
import { Pages } from "./enums/Pages";
import { LinkUrls } from "./enums/LinkUrls";
import "../scss/navbar.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppContext } from "./hooks/useAppContext";
import { OrangeLiBox } from "./OrangeLiBox";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const { setActivePage, activePage } = useAppContext();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = useCallback(
    (activePagePath: string) => {
      setMenuOpen(false);
      setActivePage(activePagePath);
    },
    [setActivePage]
  );

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
          <OrangeLiBox isActivePage={activePage === LinkUrls.HOME && true}>
            <Link
              to={LinkUrls.HOME}
              onClick={() => closeMenu(LinkUrls.HOME)}
              className="nav-link"
            >
              {Pages.HOME}
            </Link>
          </OrangeLiBox>
          <OrangeLiBox isActivePage={activePage === LinkUrls.ABOUT && true}>
            <Link
              to={LinkUrls.ABOUT}
              onClick={() => closeMenu(LinkUrls.ABOUT)}
              className="nav-link"
            >
              {Pages.ABOUT}
            </Link>
          </OrangeLiBox>
          <OrangeLiBox isActivePage={activePage === LinkUrls.SKILLS && true}>
            <Link
              to={LinkUrls.SKILLS}
              onClick={() => closeMenu(LinkUrls.SKILLS)}
              className="nav-link"
            >
              {Pages.SKILLS}
            </Link>
          </OrangeLiBox>
          <OrangeLiBox isActivePage={activePage === LinkUrls.PORTFOLIO && true}>
            <Link
              to={LinkUrls.PORTFOLIO}
              onClick={() => closeMenu(LinkUrls.PORTFOLIO)}
              className="nav-link"
            >
              {Pages.PORTFOLIO}
            </Link>
          </OrangeLiBox>
          <OrangeLiBox isActivePage={activePage === LinkUrls.CONTACT && true}>
            <Link
              to={LinkUrls.CONTACT}
              onClick={() => closeMenu(LinkUrls.CONTACT)}
              className="nav-link"
            >
              {Pages.CONTACT}
            </Link>
          </OrangeLiBox>
        </ul>
      </nav>
    </>
  );
};
