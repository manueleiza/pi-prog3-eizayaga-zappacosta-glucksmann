import React, { Component } from "react";
import CardSeries from "../CardSeries/CardSeries";


class SeccionSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [

      ]
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          series: data.results
        });
      })
      .catch(error => console.log("El error fue: " + error));
  }

  render() {
    return (
      <React.Fragment>
        <section className="row-cards">
          {this.state.series.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.series.map((serie) => (
              <CardSeries
                key={serie.id}
                id={serie.id}
                title={serie.original_name}
                image={serie.poster_path}
                description={serie.overview}
              />
            ))
          )}

        </section>
      </React.Fragment>
    );
  }
}
export default SeccionSeries;