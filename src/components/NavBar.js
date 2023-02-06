import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Logo from "../img/base_il_cap_logo.png"

const NavBar = () => {
  return (
    <>
    <div class="navbar-fixed">
      <nav style={style.nav}>
        <div class="nav-wrapper container">
          <a href="#!" class="brand-logo" style={style.anchor}>
            <img style={style.logo} src={Logo} alt="Logo de la empresa"/>
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Inicio</a>
            </li>
            <li>
              <a href="badges.html">Cafetería</a>
            </li>
            <li>
              <a href="collapsible.html">Panadería</a>
            </li>
            <li>
              <a href="mobile.html">Pastelería</a>
            </li>
            <li>
              <a href="cocktails.html">Cocktails</a>
            </li>
            <li>
              <a href="contacto.html">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
      </div>
    </>
  );
};

const style = {
    anchor:{
        width:"auto",
        height:"auto"
    },
    logo: {
        width:"auto",
        height:"4rem",
        padding: "auto"
    },
    nav: {
        backgroundColor: "#DAB88B"
    }
}

export default NavBar;
