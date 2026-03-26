import React from "react";
import { Component } from "react";



class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            id: this.props.match.params.id
        };
    }

    componentDidMount(){
        this.Detail()
    }

detail(){
fetch(`https://api.themoviedb.org/3/movie/${id}`)
  .then(res => res.json())
  .then(res => this.setState(
    {peli: data.results}
  ))
  .catch(err => console.error(err));

}


    
    render() {
        return (
            <article className='movie-card'>
            </article>

        )
    }


}

export default Detalle;
