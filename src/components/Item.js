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
          </div>
          <div className="card-content">
            <p className="card-title" style={style.pName}>{producto.nombre}</p>
            <p style={style.pStyle}>${producto.precio}</p>
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
  pStyle: {
    fontSize: "20px",
  },
  pName: {
    fontWeight: "normal",
    fontSize: "25px",
  }
};
