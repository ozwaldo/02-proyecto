import React, { useState } from "react";
import { CompFormEditar } from "./CompFormEditar";


export const CompListado = ({ listaState, setListaState }) => {

    //const [listaState, setListaState] = useState([]);

    const [editarState, setEditarState] = useState(0);

    const clickBorrarPelicula = (id) => {
        console.log(listaState);

        let arrayPeliculas = arrayRemove(listaState, id);
        console.log(id, arrayPeliculas);

        setListaState(arrayPeliculas);
        localStorage.setItem("peliculas", JSON.stringify(arrayPeliculas));
    };

    const clickEditarPelicula = (id) => {
        setEditarState(id);
    };

    const arrayRemove = (arreglo, value) => {
        return arreglo.filter(function (ele) {
            return ele.id !== value;
        });
    };

    return (
        <section id="content" className="content">

            {/* <!--aqui van las peliculas--> */}

            {console.log("length ", listaState.length)}

            {listaState.length > 0 ? (
                listaState.map((pelicula) => {
                    return (
                        <article className="peli-item" key={pelicula.id}>
                            <h3 className="title">{pelicula.titulo}</h3>
                            <p className="description">{pelicula.descripcion}</p>

                            <button
                                className="edit"
                                onClick={() => clickEditarPelicula(pelicula.id)}
                            >
                                Editar
                            </button>

                            <button
                                className="delete"
                                onClick={() => clickBorrarPelicula(pelicula.id)}
                            >
                                Borrar
                            </button>

                            {editarState === pelicula.id && (
                                <CompFormEditar 
                                    pelicula = {pelicula}
                                    setListaState = {setListaState}
                                    listaState = {listaState}
                                    setEditarState = {setEditarState}/>
                            )}
                        </article>
                    );
                })
            ) : (
                <article className="peli-item">
                    <h3 className="title">No hay peliculas</h3>
                </article>
            )}
        </section>
    );
};
