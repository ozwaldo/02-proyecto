import React, { useEffect, useState } from "react";

export const CompListado = ({listaState, setListaState}) => {

     //const [listaState, setListaState] = useState([]);
    const [editarState, setEditarState] = useState(0);
    

    useEffect(() => {
        obtenerPeliculas()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const obtenerPeliculas = () => {

        let peliculas = JSON.parse(localStorage.getItem("peliculas"));        
        setListaState(peliculas);

        return peliculas;
        //console.log(peliculas)
    }

    const clickBorrarPelicula = (id) => {

        console.log(obtenerPeliculas());

        let arrayPeliculas = arrayRemove(obtenerPeliculas(),id);
        console.log(id, arrayPeliculas);

        setListaState(arrayPeliculas);
        localStorage.setItem("peliculas",JSON.stringify(arrayPeliculas));        
        

    }

    const clickEditarPelicula = (id) => {

    }

    const arrayRemove = (arreglo, value) => {
        return arreglo.filter(function(ele){
            return ele.id !== value
        });
    }



    return (
        <section id="content" className="content">
            {/* <!--aqui van las peliculas--> */}
            {console.log("length ", listaState.length)}
            {listaState.length > 0 ? listaState.map(pelicula =>{return(
                <article className="peli-item" key={pelicula.id}>
                    <h3 className="title">{pelicula.titulo}</h3>
                    <p className="description">{pelicula.descripcion}</p>

                    <button className="edit" onClick={() => clickEditarPelicula(pelicula.id)}>Editar</button>
                    <button className="delete" onClick={()=>clickBorrarPelicula(pelicula.id)}>Borrar</button>
                </article>)
            }): <article className="peli-item"><h3 className="title">No hay peliculas</h3></article>}
        </section>
    );
};
