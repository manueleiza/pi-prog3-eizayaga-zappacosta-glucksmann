import react, { Component } from "react";
import "../FormRegister/FormRegister.css"


class FormLogin extends Component {

    constructor() {
        super();
        this.state = {
            correo: "",
            contrasenia: "",
            enviado: false,
            validarCorreoContrasenia: false,

        }

    }

    evitarSubmit(event) {
        event.preventDefault();
        this.setState({
            enviado: true,
        })


        let correoUsado = localStorage.getItem("correoUsuario");
        let contraUsada = localStorage.getItem("constraseñaUsuario")

        if (this.state.contrasenia != contraUsada || this.state.correo != correoUsado) {
            this.setState ({
                validarCorreoContrasenia: true,
            })

            console.log("los datos son incorrectos")
           

        }

         this.setState({
                correo:"",
                contrasenia: "",
                enviado: false,
                validarCorreoContrasenia: false
            });




    }


    crearContrasenia(event) {
        this.setState({

            contrasenia: event.target.value
        })

        console.log("contraseña:" + this.state.contrasenia)
    }

    crearCorreo(event) {
        this.setState({

            correo: event.target.value,
        })

        console.log("correo:" + this.state.correo)
    }

    render() {
        return (

            <form className="form-register" onSubmit={(event) => this.evitarSubmit(event)}>
                <div>
                    {this.state.validarCorreoContrasenia ? <p className="error-contrasenia">Credenciales incorrectas</p> : ""}

                    <label>Correo Electronico: </label>
                    <input className="campo-forms" type="text" onChange={(event) => this.crearCorreo(event)} value={this.state.correo} />
                </div>
                <div>
                    <label>Constrsaeña: </label>
                    <input className="campo-forms" type="text" onChange={(event) => this.crearContrasenia(event)} value={this.state.contrasenia} />
                </div>

                <input className="boton" type="submit" value="INICIAR SESIÓN" />

                <a className="ya-tengo-cuenta" href="">No tengo cuenta</a>



            </form>


        )
    }

}

export default FormLogin