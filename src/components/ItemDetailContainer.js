import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (producto) => {

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    );
};

export default ItemDetailContainer;