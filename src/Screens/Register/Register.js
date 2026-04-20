import react from "react";
import FormRegister from "../../components/FormRegister/FormRegister";
import Header from "../../components/Header/Header";


function Register() {
    return (
        <react.Fragment>
            <Header/>
        <section className="conetenedor-padre">
            <article className="articulo-formulario">
                <h2>¡CREA TU CUENTA!</h2>
                <FormRegister />
            </article>


        </section>
        </react.Fragment>
    )
}

export default Register