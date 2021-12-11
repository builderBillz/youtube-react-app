import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
   <>
   <div className='NavBar'>
        <h1>Youtube</h1>
          <ul>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
          </ul>
          <ul>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/about">About</Link>
          </ul>
    </div>
    </>
  );
};

export default NavBar;