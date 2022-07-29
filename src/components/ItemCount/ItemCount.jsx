import React, {useState} from "react";

function ItemCount(props){
    const [clicks, setClicks] = useState(1);
    const stockNumber = 5
    const handlerIncrement=()=> {
        //setClicks(clicks + 1);
        clicks < stockNumber? setClicks(clicks + 1): setClicks(stockNumber) ;
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
            <h3>Stock es de {stockNumber} </h3>
            <h3>Supuesto Carrito: {clicks} </h3>

        </div>
    )
}

export default ItemCount;
