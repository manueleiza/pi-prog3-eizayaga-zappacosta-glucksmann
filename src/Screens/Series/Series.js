import React, { Component, useState, useEffect } from "react";
import CardSerie from "../../components/CardSerie/CardSerie";
import Header from "../../components/Header/Header";


function Series() {
  const [todasSeries, setTodasSeries] = useState([]);
  const [mostradas, setMostradas] = useState(5);
  const [pagina, setPagina] = useState(1);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setTodasSeries(data.results);
      })
      .catch(error => console.log("El error fue: " + error));
  }, []);


  function verMas() {
    if (mostradas + 5 > todasSeries.length) {
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=${pagina}`)
        .then(response => response.json())
        .then(data => {
          setTodasSeries(todasSeries.concat(data.results));
          setPagina(pagina + 1);
          setMostradas(mostradas + 5);
        })
        .catch(error => console.log("El error fue: " + error));
    } else {
      setMostradas(mostradas + 5);
    }
  }

let seriesMostradas = todasSeries.slice(0, mostradas);

  return (
    <React.Fragment>
      <Header />

      <section className="row-cards">
        {todasSeries.length === 0 ? (
          <img className="cargando" src="./img/cargando.gif" alt="gif cargando" />
        ) : (
          seriesMostradas.map((pelicula) => (
            <CardSerie
              className="pelicula"
              tipo="serie"
              key={pelicula.id}
              id={pelicula.id}
              title={pelicula.original_title}
              image={pelicula.poster_path}
              description={pelicula.overview}
            />
          ))
        )}

        <article className="boton-mas-pelis">
          <button onClick={verMas}>Ver Más</button>
        </article>
      </section>
    </React.Fragment>
  );
}

export default Series;


