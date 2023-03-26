import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totales } = useContext(CartContext) || {};
  const cantidad = totales?.cantidad || 0;
  return (
    <>
      <Link to={"/cart"}>
        <i className="material-icons">
          <ShoppingCartIcon />
          <Badge badgeContent={cantidad > 0 ? <p>{cantidad}</p> : null} color="error">
          </Badge>
        </i>
      </Link>
    </>
  );
};

export default CartWidget;