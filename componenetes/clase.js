//También hay otro tipos de componentes, que están compuestos por clases. Aquí, tendremos una clase, con el nombre que queramos, que extiende de React.Component

import react from "react";
import { Component } from "react/cjs/react.production.min";

class App extends Component{

    //tambien nos podemos topar con el constructor aunque ya casi no se usa es muy probable que si miras proyectos viejos te topes con el 
    /* constructor() {
        super();
        this.sate = {
            count: 0
        };
    } */

    render(){
        return(
            <div>
                <h1> hello world</h1>
            </div>
        )
    }
}