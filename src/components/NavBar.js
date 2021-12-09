import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
   <div>
        <h1>
          Youtube
        </h1>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>
    </div>
  );
};

export default NavBar;