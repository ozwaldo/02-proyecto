import React from 'react'

export const CompFormEditar = ({ pelicula, setListaState, listaState, setEditarState }) => {

    //const [inputsState, setInputsState] = useState({});

    const editarPelicula = (e, id) =>{
        e.preventDefault();

        const listaPeliculas = listaState;

        const idPelicula = listaPeliculas.findIndex(ele => ele.id === id);

        let peliculaActualizada = {
            id,
            titulo:e.target.titulo.value,
            descripcion:e.target.descripcion.value
        }

        listaPeliculas[idPelicula]= peliculaActualizada;

        console.log(listaPeliculas);

        setListaState(listaPeliculas);
        localStorage.setItem("peliculas", JSON.stringify(listaPeliculas));

        setEditarState(idPelicula)



        
    }

    return (
        <div>
            <form className='edit_form' onSubmit={e => editarPelicula(e, pelicula.id)}>
                <input type="text" className='editarPelicula' defaultValue={pelicula.titulo} name="titulo"></input>
                <textarea className='editarPelicula' defaultValue={pelicula.descripcion} name="descripcion"></textarea>
                <input type="submit" className='actualizar' value='Actualizar'></input>
            </form>
        </div>
    )
}
