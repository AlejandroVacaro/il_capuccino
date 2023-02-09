import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Logo from "../img/base_il_cap_logo.png";
import CardWidget from "./CartWidget";

const NavBar = ({name, lastName}) => {
  
  return (
    <>
      <div class="navbar-fixed">
        <nav style={style.nav}>
          <div class="nav-wrapper container">
            <a href="#!" class="brand-logo" style={style.anchor}>
              <img style={style.logo} src={Logo} alt="Logo de la empresa" />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Cafetería</a>
              </li>
              <li>
                <a href="#">Panadería</a>
              </li>
              <li>
                <a href="#">Pastelería</a>
              </li>
              <li>
                <a href="#">Cocktails</a>
              </li>
              <CardWidget />
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Cafetería</a>
          </li>
          <li>
            <a href="#">Panadería</a>
          </li>
          <li>
            <a href="#">Pastelería</a>
          </li>
          <li>
            <a href="#">Cocktails</a>
          </li>
          <CardWidget />
        </ul>
      </div>
      <div>
        <p style={style.greeting}>Usted ha iniciado sesión con el usuario {name} {lastName}.</p>
      </div>
    </>
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
  greeting: {
    padding:"0.5rem 0 0 1rem",
    color: "#B7CADB"
  }
};

export default NavBar;