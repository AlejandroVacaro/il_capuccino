import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { totales } = useContext(CartContext) || {};
  const cantidad = totales?.cantidad || 0;
  return (
    <>
      <Link to={"/cart"}>
        <li>
          <a href="#">
            <i className="material-icons">
              <ShoppingCartIcon />
              <Badge badgeContent={cantidad > 0 && <p>{cantidad}</p>} color="error">
              </Badge>
            </i>
          </a>
        </li>
      </Link>
    </>
  );
};

export default CardWidget;
