import { useEffect, useState } from "react";
import "./App.css";
import { CompAdd } from "./components/CompAdd";
import { CompBuscador } from "./components/CompBuscador";
import { CompListado } from "./components/CompListado";

function App() {

  const [listaState, setListaState] = useState([]);

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  const obtenerPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
    setListaState(peliculas);

    return peliculas;
    //console.log(peliculas)
  };

  return (
    <div className="App">
      <div className="layout">
        {/* <!--Cabecera--> */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>X Movies</h1>
        </header>

        {/* <!--Barra de navegación--> */}
        <nav className="nav">
          <ul>
            <li>
              <a href="/#">Inicio</a>
            </li>
            <li>
              <a href="/#">Peliculas</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* <!--Contenido principal--> */}
        <CompListado listaState={listaState} setListaState={setListaState} />

        {/* <!--Barra lateral--> */}
        <aside className="lateral">
          <CompBuscador listaState={listaState} setListaState={setListaState}></CompBuscador>

          <CompAdd
            listaState={listaState}
            setListaState={setListaState}
          ></CompAdd>

          
        </aside>

        {/* <!--Pie de página--> */}
        <footer className="footer">
          &copy; Primer Proyecto -{" "}
          <a href="/#">Martin Adolfo 2022 Todos los derechos reservados</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
