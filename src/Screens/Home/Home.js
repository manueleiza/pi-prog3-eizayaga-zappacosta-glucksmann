import React, {Component} from "react";
import SeccionPelis from "../../components/SeccionPelis/SeccionPelis";

class Home extends Component{
    render(){
        return(
            <main>
                <h1>Home</h1>
                <SeccionPelis />
            </main>
        )
    }
}

export default Home;