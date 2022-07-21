import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import Logo from "../../Assets/Logo Munay curvas.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/">
            <img className="logo-image" src={Logo} />
          </Link>
          <ul className="navbar-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="category"
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar-link"
                }
              >
                Categorías
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar-link"
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="cart">
          <CardWidget />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
