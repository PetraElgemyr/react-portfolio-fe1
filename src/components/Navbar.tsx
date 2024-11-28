import { Link } from "react-router-dom";
import { Pages } from "./enums/Pages";
import { LinkUrls } from "./enums/LinkUrls";

export const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to={LinkUrls.HOME}>{Pages.HOME}</Link>
      </li>
      <li>
        <Link to={LinkUrls.ABOUT}>{Pages.ABOUT}</Link>
      </li>
      <li>
        <Link to={LinkUrls.PROJECTS}>{Pages.PROJECTS}</Link>
      </li>
      <li>
        <Link to={LinkUrls.CONTACT}>{Pages.CONTACT}</Link>
      </li>
    </nav>
  );
};
