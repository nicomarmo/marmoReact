import React, {useState} from "react";


function ItemCount(props){
    const [clicks, setClicks] = useState(1);
    const handlerIncrement=()=> {
        clicks < props.stock? setClicks(clicks + 1): setClicks(props.stock) ;
    }
    const handlerDecrement=()=> {
        clicks <= 1? setClicks(1):setClicks(clicks - 1);
    }

    return(
        <div>
            <h1>Contador</h1>
            <button onClick={handlerIncrement} >Sumar Item</button>
            <button onClick={handlerDecrement} >Restar Item</button>
            <h2>Queres {clicks} items</h2>
            <h3>Stock es de {props.stock} </h3>
            <h3>Supuesto Carrito: {clicks} </h3>
            
        </div>
    )
}

export default ItemCount;
