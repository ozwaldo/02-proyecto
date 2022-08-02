export const GuardarLocalStorage = (clave, pelicula) => {

  let peliculas = JSON.parse(localStorage.getItem(clave));

  if (Array.isArray(peliculas)) {
    alert("agregar");
    peliculas.push(pelicula);
  } else {
    alert("nueva");
    peliculas = [pelicula];
  }

  localStorage.setItem(clave, JSON.stringify(peliculas));
  console.log(peliculas);
  return pelicula;
  
};
