import React, { useState } from "react";

const Button = () => {
    const [name, setName] = useState('hola mundo'); // es un estado inicial que puede ser cambiado por algun evento
    // el set name se usaria como el evento que genere el cambio
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}
