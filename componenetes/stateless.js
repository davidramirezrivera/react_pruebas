//Los componentes stateless servirán para pasar un estilo visual o props, pero no tendrá otra función más que esa.

import react from "react";

const Button = ({ text }) => <buttonRed text={text}/>


// tambien se puede ver de la siguiente forma 

/* import React from 'react';

const Button = () => (
        <div>
            <h1>hola mundo</h1>
        </div>
); */