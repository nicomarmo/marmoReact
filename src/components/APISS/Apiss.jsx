import React, {useState, useEffect} from "react";

export default function Apiss(){
    const [pokelist,setPokelist] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon?offset=60&limit=10"
   useEffect(
    ()=>{
        console.log("fetch")
        fetch(url)
        .then(
            (respuestaJson)=> {
                console.log(respuestaJson);
                respuestaJson.json()
            }
        ).then(
            (respuesta) => setPokelist(respuesta.results)
        )
    },
    []
   )

    return (
        <div>
            <h1>Pokeapi</h1>
            {
               pokelist.map( (poke)=>{
                return(
                    <>
                    <h3>
                        {poke.name}
                    </h3>
                    <a href={poke.url}>Ver Mas</a>
                    </>
                )
               })
            }
        </div>
    );
}