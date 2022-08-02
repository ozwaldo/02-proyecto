import React, { useEffect } from "react";

export const CompListado = ({listaState, setListaState}) => {

     //const [listaState, setListaState] = useState([]);


    useEffect(() => {
        obtenerPeliculas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const obtenerPeliculas = () => {

        let peliculas = JSON.parse(localStorage.getItem("peliculas"));
        
        setListaState(peliculas)
        
        //console.log(peliculas)
    }

    return (
        <section id="content" className="content">
            {/* <!--aqui van las peliculas--> */}
            {listaState.map(pelicula =>{return(
                <article className="peli-item" key={pelicula.id}>
                    <h3 className="title">{pelicula.titulo}</h3>
                    <p className="description">{pelicula.descripcion}</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>)
            })}
        </section>
    );
};
