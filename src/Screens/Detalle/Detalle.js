import React from "react";
import { Component } from "react";



class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            id: props.match.params.id,
            type: props.match.params.type,
        };
    }

    componentDidMount(){
        this.state.type === "tv" ? 
        this.DetailSerie() : 
        this.DetailMovie()
    }

DetailMovie(){
fetch(`https://api.themoviedb.org/3/${this.state.type}/${this.state.id}`)
  .then(res => res.json())
  .then(data => this.setState({peli: data }))
  .catch(err => console.error(err));
}
 DetailSerie(){
fetch(`https://api.themoviedb.org/3/${this.state.type}/${this.state.id}`)
  .then(res => res.json())
  .then(data => this.setState({serie: data }))
  .catch(err => console.error(err));
}



    
    render() {
        return (
            
                //aca tengo que hacer un ternario para mostrar el artcile de peli o de tv segun cual agarre
            
            <article className='movie-card'>
                <img src={this.Detalle.personaje.image} alt="" />
                <h2>{this.props.datos.name} </h2>
                <p> {this.props.datos.status}</p>
                <p> {this.props.datos.species} </p>
            </article>

        )
    }


}

export default Detalle
