import { render } from "@testing-library/react";
import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: false
        };
    }

    cambiarEstado() {
        this.setState({
            mostrar: !this.state.mostrar
        });
    }

    render() {
        return (
            <article>
                <img
                    src={`https://image.tmdb.org/t/p/w342${this.props.image}`}
                />

                <h2>{this.props.title}</h2>

                {this.state.mostrar ? <p>{this.props.description}</p> : null}
                <button className="more" onClick={() => this.cambiarEstado()}>
                    {this.state.mostrar ? "Ver menos" : "Ver más"}
                </button>
            </article>
        );
    }
}


export default Card;

