import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totales, setTotales] = useState({ cantidad: 0, total: 0 });

    useEffect(() => {
        let cantidadInicial = 0;
        let total = 0;
        cart.forEach((producto) => {
            cantidadInicial += producto.cantidad;
            total += producto.cantidad * producto.precio;
        });
        setTotales({ cantidad: cantidadInicial, total: total })
    }, [cart]
    );


    const enCarrito = (id) => cart.some((producto) => producto.id === id);

    const eliminarProducto = (id) => setCart(cart.filter((producto) => producto.id !== id));

    const vaciarCarrito = () => setCart([]);


    const agregarProductos = (producto, cantidad) => {
        if (enCarrito(producto.id)) {
            setCart(
                cart.map((productoCarrito) => {
                    if (productoCarrito.id === producto.id)
                        return { ...productoCarrito, cantidad };
                    return productoCarrito;
                })
            );
        } else {
            setCart([...cart, { ...producto, cantidad }]);
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, totales, agregarProductos, eliminarProducto, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )

}