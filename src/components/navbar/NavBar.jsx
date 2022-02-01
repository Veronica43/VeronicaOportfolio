import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav-main">
      <Link to="/">
        <h1 className="name">Home</h1>
      </Link>

      <Link to="/about">
        <h1 className="name">About</h1>
      </Link>
      <Link to="/contact">
        {" "}
        <h1 className="name">Contact</h1>
      </Link>
    </div>
  );
};

export default NavBar;
