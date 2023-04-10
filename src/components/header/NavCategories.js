import React  from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
    const categorias = [
        {id:101, name: "CAFETERÍA", route:"/categoria/Cafetería"},
        {id:102, name: "PANADERÍA", route:"/categoria/Panadería"},
        {id:103, name: "PASTELERÍA", route:"/categoria/Pastelería"},
        {id:104, name: "JUGOS", route:"/categoria/Jugos"}
    ];

    return (
            <>
                {categorias.map((categoria) => {
                    return (
                        <li key={categoria.id}>
                            <NavLink style={style.liCategorias} to={categoria.route}>{categoria.name}</NavLink>
                        </li>
                    );
                })}
            </>
    );

};

export default NavCategories;

const style = {
    liCategorias: {
        fontSize: "1.2rem",
        paddingRight: "2rem",
        paddingLeft: "2rem",
    }
}