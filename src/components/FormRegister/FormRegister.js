import react, { Component } from "react";
import "./FormRegister.css"

class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correo: '',
            contraseña: '',
            enviado: false,
            validarCorreo: false,

        };
    }

    evitarSubmit(event) {
        event.preventDefault();
        this.setState({
            enviado: true,
        })

        if (this.state.contraseña.length >= 6) {

            const usuario = {
                correo: this.state.correo,
                contraseña: this.state.contraseña
            }

            let correoUsado = localStorage.getItem("correoUsuario");

            if (this.state.correo === correoUsado) {
                this.setState({
                    validarCorreo: true,
                })

                console.log("correo usado")
                return;
            }

            localStorage.setItem("correoUsuario", this.state.correo);
            localStorage.setItem("constrseñaUsuario", this.state.contraseña)
            console.log(localStorage)

            this.setState({
            correo: '',
            contraseña: '',
            enviado: false, 
            validarCorreo: false
        });

            


        }

       
        console.log("el formulario se envió")
    }

    crearContraseña(event) {
        this.setState({

            contraseña: event.target.value
        })

        console.log("contraseña:" + this.state.contraseña)
    }

    crearCorreo(event) {
        this.setState({

            correo: event.target.value,
        })

        console.log("correo:" + this.state.correo)
    }

    validarCorreo(event) {


    }

    validarContraseña(event) {

    }






    render() {
        return (

            <form className="form-register" onSubmit={(event) => this.evitarSubmit(event)}>
                <div>
                    <label>Correo Electronico: </label>
                    <input  className="campo-forms"  type="text" onChange={(event) => this.crearCorreo(event)} value={this.state.correo} />
                    {this.state.correo.length === 0 && this.state.enviado ? <p className="error-contraseña">El campo está vacio</p> : ""}
                    {this.state.validarCorreo ? <p className="error-contraseña">Este correo tiene una cuenta asociada existente</p> : ""}
                </div>
                <div>
                    <label>Constrsaeña: </label>
                    <input className="campo-forms" type="text" onChange={(event) => this.crearContraseña(event)} value={this.state.contraseña} />
                    {this.state.contraseña.length === 0 && this.state.enviado ? <p className="error-contraseña">El campo está vacio</p> : ""}
                </div>
                {this.state.contraseña.length != 0 && this.state.contraseña.length < 6 && this.state.enviado ? <p className="error-contraseña">La contraseña debe contener al menos 6 caracteres</p> : ""}

                <input className="boton" type="submit" value="CREAR CUENTA" />
                
                <a className="ya-tengo-cuenta" href="">Ya tengo cuenta</a>



            </form>


        )
    }
}

export default FormRegister