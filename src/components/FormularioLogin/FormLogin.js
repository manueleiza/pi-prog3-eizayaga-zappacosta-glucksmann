import react, { Component } from "react";


class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }


    enviarForm(e) {
        e.preventDefault();

        const { email, password } = this.state;

        let usuarioACrear = {
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

            this.setState({ error: "@ no incluido" })
            return;
        }

        let usersStorage = localStorage.getItem("users")
        if (usersStorage != null) {
            let usersParseado = JSON.parse(usersStorage);

            let usersFiltrados = usersParseado.filter(username => username.email === email);

            if (usersFiltrados.length === 0) {
                this.setState({ error: "no existe ese usuario" })
                console.log("correo error")

                return;
            }
            if (usersFiltrados[0].password !== password) {
                this.setState({ error: "las credenciales ingresadas son invalidas" })
                return;
            }
            sessionStorage.setItem(
                "usuarioEnSesion",
                JSON.stringify({ sesionActiva: true })
            );

            this.props.history.push
        }


        // recuperar el local storage, buscar en email ingresado, comparar las password --> crear la cookie y redirigir



        console.log("se envio el formulario")



    }

    controlarCambios(e, estadoNombre) {
        this.setState({ [estadoNombre]: e.target.value }); //agarra lo q escribe el usuario y lo guarda en el state
    }





    render() {
        return (

            <form className="form-register" onSubmit={(e) => this.enviarForm(e)}>


                <label>Correo Electronico: </label>
                <input className="campo-forms" type="email" value={this.state.email} onChange={(e) => this.controlarCambios(e, "email")} />

                <label>Constrsaeña: </label>
                <input className="campo-forms" type="password" value={this.state.password} onChange={(e) => this.controlarCambios(e, "password")} />

                <button className="boton" type="submit" > Login </button>

            </form>


        )
    }
}

export default FormLogin