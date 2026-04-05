import react, { Component } from "react";
import "./FormRegister.css"

class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correo: '',
            contrasenia: '',
            enviado: false,
            validarCorreo: false,

        };
    }

    evitarSubmit(event) {
        event.preventDefault();
        this.setState({
            enviado: true,
        })

        if (this.state.contrasenia.length >= 6) {


            let correoUsado = localStorage.getItem("correoUsuario");

            if (this.state.correo === correoUsado) {
                this.setState({
                    validarCorreo: true,
                })

                console.log("correo usado")
                return;
            }

            localStorage.setItem("correoUsuario", this.state.correo);
            localStorage.setItem("constraseniaUsuario", this.state.contrasenia)
            console.log(localStorage)

            this.setState({
            correo: '',
            contrasenia: '',
            enviado: false, 
            validarCorreo: false
        });

            


        }

       
        console.log("el formulario se envió")
    }

    crearContrasenia(event) {
        this.setState({

            contrasenia: event.target.value
        })

        console.log("contrasenia:" + this.state.contrasenia)
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
                    <label>Correo Electronico: </label>
                    <input  className="campo-forms"  type="text" onChange={(event) => this.crearCorreo(event)} value={this.state.correo} />
                    {this.state.correo.length === 0 && this.state.enviado ? <p className="error-contrasenia">El campo está vacio</p> : ""}
                    {this.state.validarCorreo ? <p className="error-contrasenia">Este correo ya esta asociado a una cuenta</p> : ""}
                </div>
                <div>
                    <label>Constrsaeña: </label>
                    <input className="campo-forms" type="text" onChange={(event) => this.crearContrasenia(event)} value={this.state.contrasenia} />
                    {this.state.contrasenia.length === 0 && this.state.enviado ? <p className="error-contrasenia">El campo está vacio</p> : ""}
                </div>
                {this.state.contrasenia.length != 0 && this.state.contrasenia.length < 6 && this.state.enviado ? <p className="error-contrasenia">La contraseña debe contener al menos 6 caracteres</p> : ""}

                <input className="boton" type="submit" value="CREAR CUENTA" />
                
                <a className="ya-tengo-cuenta" href="">Ya tengo cuenta</a>



            </form>


        )
    }
}

export default FormRegister