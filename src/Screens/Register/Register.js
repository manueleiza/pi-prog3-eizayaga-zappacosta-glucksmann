import react, {Component} from "react";

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {email: '', contraseña: '',
        };
    }

    evitarSubmit(event){
        event.preventDefault();
    } 
    
    controlarEmail(event){
        this.setState({
            email: event.target.value
        
        });
    }
       
    controlarContraseña(event){
        this.setState({

            contraseña: event.target.value});
            console.log(event.target.value)
        }

    validarContraseña(event){
        this.setState({
            contraseña: event.target.value            
        })

    }

    render(){
        return(

            <form className="form-register" onSubmit={(event) => this.evitarSubmit(event)}>

                <label>Correo Electronico: </label>
                <input type="text" onChange={(event) => this.controlarEmail(event)} value={this.state.valor}/>
               
                <label>Constrsaeña: </label>
                <input type="text" onChange={(event) => this.controlarContraseña(event)} value={this.state.valor}/>
            
                <input className="boton" type="submit" value="Submit"/>




            </form>


        )
    }
}

export default Register