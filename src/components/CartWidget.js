import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const CardWidget = () => {
  return (
    <>
      <li>
        <a href="#">
          <i class="material-icons">
            <ShoppingCartIcon />
            <Badge badgeContent={4} color="error">
            </Badge>
          </i>
        </a>
      </li>
    </>
  );
};

export default CardWidget;
