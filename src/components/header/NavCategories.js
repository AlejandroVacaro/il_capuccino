import React, { useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
    const categorias = [
        {id:101, name: "Cafetería", route:"/categoria/Cafetería"},
        {id:102, name: "Panadería", route:"/categoria/Panadería"},
        {id:103, name: "Pastelería", route:"/categoria/Pastelería"},
        {id:104, name: "Jugos", route:"/categoria/Jugos"}
    ];

    return (
            <>
                {categorias.map((categoria) => {
                    return (
                        <li key={categoria.id} ><NavLink to={categoria.route}>{categoria.name}</NavLink></li>
                    );
                })}
            </>
    );

};

export default NavCategories;