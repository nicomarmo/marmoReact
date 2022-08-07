import React, { useEffect } from "react";
import dataJSON from "../../data/data";
import Card from "../Card/CardWithObject";

function ItemDetailContainer({ itemid }) {

  function traerProducto() {
    return new Promise((resolve, reject) => {
      let itemEncontrado = dataJSON.find((element) => itemid === element.id);
      itemEncontrado
        ? resolve(itemEncontrado)
        : reject(new Error("Error en el find"));
    });
  }

  useEffect(() => {
    traerProducto()
      .then((respuesta) => console.log(respuesta))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="main">
    </div>
  );
}

export default ItemDetailContainer;