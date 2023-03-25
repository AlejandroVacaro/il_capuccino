import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totales, setTotales] = useState({cantidad: 0, total:0});

    useEffect(() => {
        let cantidadInicial = 0;
        let total = 0;
        cart.forEach((producto) => {
            cantidadInicial += producto.cantidad;
            total =+ producto.cantidad * producto.precio;
        });
        setTotales({cantidad: cantidadInicial, total:total})
    }, [cart]
    );

    




}