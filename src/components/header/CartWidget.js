import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { CartContext } from "../context/CartContext"

const CardWidget = () => {
  const { totales } = useContext(CartContext);
  return (
    <>
      <li>
        <a href="#">
          <i className="material-icons">
            <ShoppingCartIcon />
            <Badge badgeContent={totales.cantidad > 0 && <p>{totales.cantidad}</p>} color="error">
            </Badge>
          </i>
        </a>
      </li>
    </>
  );
};

export default CardWidget;
