import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import Logo from "../../Assets/Logo Munay curvas.png";
import Home from "../../Assets/home.png";
import Search from "../../Assets/search.png";
import Hearth from "../../Assets/hearth.png";
import User from "../../Assets/user.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <Link to="cart" className="carrito">
          <CardWidget />
        </Link>
      </header>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-ulist">
            <li className="navbar-li">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar-link"
                }
              >
                <img src={Home} alt="home" className="home-logo" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="category"
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar-link"
                }
              >
                <img src={Search} alt="search" className="search-logo" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar-link"
                }
              >
                <img src={Hearth} alt="hearth" className="hearth-logo" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="user"
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar-link"
                }
              >
                <img src={User} alt="user" className="user-logo" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
