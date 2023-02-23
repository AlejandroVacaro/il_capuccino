import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={`/item/${producto.id}`}>
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-image">
            <img
              style={style.imgStyle}
              src={producto.imagen} />
            <Link
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">+</i>
            </Link>
          </div>
          <div className="card-content">
            <span className="card-title">{producto.nombre}</span>
            <p>${producto.precio}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;

const style = {
  imgStyle: {
    width: "100%",
    height: "auto",
  },
};
