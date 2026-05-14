import React, { Component, useEffect, useState } from "react";
import CardSeries from "../CardSerie/CardSerie";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css"


function SeccionSeries(){

  const[series, setSeries]=useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results);
      })
      .catch((error) => console.log("El error fue: " + error));
  }, []); 


  return (
      <section className="row-cards">
        {series.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          series.map((serie) => (
            <CardSeries
              tipo="serie"

              key={serie.id}
              id={serie.id}
              title={serie.original_name}
              image={serie.poster_path}
              description={serie.overview}
            />
          ))
        )}



      <div className="ver-todas">
        <Link to="/Series" className="boton-pelis">Ver todas</Link>
      </div>

      </section>
    );
  }

export default SeccionSeries;