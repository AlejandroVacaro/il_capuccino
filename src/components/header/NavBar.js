import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Logo from "../../img/base_il_cap_logo.png";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ name }) => {

  return (
    <header>
      <div className="navbar-fixed">
        <nav style={style.nav}>
          <div className="nav-wrapper container">
            <Link to={"/"} className="brand-logo" style={style.anchor}>
              <img style={style.logo} src={Logo} alt="Logo de la empresa" />
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <NavCategories />
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
          <p style={style.indicadorUsuario}>Usted ha iniciado sesión con el usuario: {name}</p>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <NavCategories />
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </header>
  );
};

const style = {
  anchor: {
    width: "auto",
    height: "auto",
  },
  logo: {
    width: "auto",
    height: "4rem",
    padding: "auto",
  },
  nav: {
    backgroundColor: "#DAB88B",
  },
  indicadorUsuario: {
    color: "#039be5",
    paddingLeft: "8px",
    backgroundColor: "#FDF6EC"
  }
};

export default NavBar;