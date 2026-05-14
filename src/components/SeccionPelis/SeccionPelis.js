import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./SeccionPelis.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SeccionPelis() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => console.log("El error fue: " + error));
  }, []); 

  return (
    <section className="row-cards">
      {peliculas.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        peliculas.map((pelicula) => (
          <Card
            className="pelicula"
            tipo="pelicula"
            key={pelicula.id}
            id={pelicula.id}
            title={pelicula.original_title}
            image={pelicula.poster_path}
            description={pelicula.overview}
          />
        ))
      )}

      <div className="ver-todas">
        <Link to="/Peliculas" className="boton-pelis">
          Ver todas
        </Link>
      </div>
    </section>
  );
}

export default SeccionPelis;