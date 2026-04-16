import react, { Component } from "react";
import "./FormRegister.css"

class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            error: ""
        };
    }


    enviarForm(e) {
        e.preventDefault();

        const { username, email, password } = this.state;

        let usuarioACrear = {
            username: username,
            email: email,
            password: password,
            createdAt: Date.now()
        };

        if (password.length < 6) {
            this.setState({ error: "extension menor a 6 caracteres" });
            console.log("aaa")
            return;
        }
        if (!email.includes("@")) {
            console.log("estoy en error email");

            this.setState({ error: "@ no incluido" }) //revisar que no exista un usu con ese mail...
            return;
        }

        let usersStorage = localStorage.getItem("users")
        if (usersStorage != null) {
            let usersParseado = JSON.parse(usersStorage);

            let usersFiltrados = usersParseado.filter(username => username.email === email);

            if (usersFiltrados.length > 0) {
                this.setState({ error: "ya existe un user con este correo" })

                console.log("correo error")

                return;
            }
            else {
                usersParseado.push(usuarioACrear);
                let usersEnJson = JSON.stringify(usersParseado)

                localStorage.setItem("users", usersEnJson)
            }


        }

        else {
            console.log("Entre");

            let usersInicial = [usuarioACrear]
            let usersEnJson = JSON.stringify(usersInicial)
            localStorage.setItem("users", usersEnJson)
        }


        console.log("se envio el formulario")



    }

    controlarCambios(e, estadoNombre) {
        this.setState({ [estadoNombre]: e.target.value });
    }





    render() {
        return (

            <form className="form-register" onSubmit={(e) => this.enviarForm(e)}>

                <label>Username: </label>
                <input className="campo-forms" type="text" value={this.state.username} onChange={(e) => this.controlarCambios(e, "username")} />

                <label>Correo Electronico: </label>
                <input className="campo-forms" type="email" value={this.state.email} onChange={(e) => this.controlarCambios(e, "email")} />

                <label>Constrsaeña: </label>
                <input className="campo-forms" type="password" value={this.state.password} onChange={(e) => this.controlarCambios(e, "password")} />

                <button className="boton" type="submit" > Crear cuenta</button>

                <a className="ya-tengo-cuenta" href="">Ya tengo cuenta</a>


            </form>


        )
    }
}

export default FormRegister