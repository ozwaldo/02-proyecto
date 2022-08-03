import React, { useState } from "react";

export const CompBuscador = ({ listaState, setListaState }) => {

  const [buscarState, setBuscarState] = useState("");

  const buscarPelicula = e => { 

    //event.preventDefault();

    let search = e.target.value;
    console.log("Search: ", search);

    setBuscarState(search);

    console.log("BuscarState", buscarState)
    const buscar = JSON.parse(localStorage.getItem("peliculas"));

    let resultado = buscar.filter(elemento => {
      console.log("Entra a filter")
      return elemento.titulo.toLowerCase().includes(buscarState.toLowerCase());

    })

    // if (buscarState.length < 1 || resultado <= 0)  {
    //   console.log("Entra a if");
    //   resultado = JSON.parse(localStorage.getItem("peliculas"));

    // }

    setListaState(resultado);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      <p>{buscarState}</p>
      <form>
        <input type="text" id="search_field" onChange = {buscarPelicula} />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
