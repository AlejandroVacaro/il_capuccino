import React, {useState} from "react";
import M from "materialize-css";

const ItemCount = ({agregar, stock = 5}) => {
    const [count, setCount] = useState(1);

    const handlerClickAgregar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handlerClickQuitar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div>
                <a class="btn-floating btn-large waves-effect waves-light red" onClick={() => handlerClickQuitar}><i class="material-icons">-</i></a>
                <h2>
                    {count}
                </h2>
                <a class="btn-floating btn-large waves-effect waves-light red" onClick={() => handlerClickAgregar}><i class="material-icons">+</i></a>
            </div>
            <a class="waves-effect waves-light btn-large">Agregar al carrito</a>
        </div>
    )

}

export default ItemCount;