import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Logo from "../../img/base_il_cap_logo.png";
import NavCategories from "./NavCategories";
import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ name }) => {

  return (
    <header>
      <div class="navbar-fixed">
        <nav style={style.nav}>
          <div class="nav-wrapper container">
            <Link to={"/"} class="brand-logo" style={style.anchor}>
              <img style={style.logo} src={Logo} alt="Logo de la empresa" />
            </Link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <NavCategories />
              <li>
                <Link to={"/cart"}>
                <CardWidget />
              </Link>
              </li>
            </ul>
          </div>
          <p style={style.indicadorUsuario}>Usted ha iniciado sesión con el usuario: {name}</p>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <NavCategories />
          <Link to={"/cart"}>
            <CardWidget />
          </Link>
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
    color: "#B7CADB",
    paddingLeft: "8px",
    backgroundColor: "#FDF6EC"
  }
};

export default NavBar;