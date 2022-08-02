import React, { useState } from "react";
import { GuardarLocalStorage } from "../helpers/GuardarLocalStorage";

export const CompAdd = ({listaState, setListaState}) => {

    const [peliculaState, setPeliculaState] = useState([]);

    const obtenerDatosFormularios = e => {

        e.preventDefault();
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        //console.log(pelicula);
        setPeliculaState(pelicula);
        GuardarLocalStorage("peliculas", pelicula);

        setListaState(peliculas => {
            return[...peliculas,pelicula]
        })
    };


    return (
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            
            {peliculaState.length > 0 &&
                <p>
                    Prueba {peliculaState.titulo}
                </p>
            }

            <form onSubmit={obtenerDatosFormularios}>
                <input type="text" id="titulo" placeholder="Titulo" />
                <textarea id="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id="guardar" value="Guardar" />
            </form>
        </div>
    );
};
