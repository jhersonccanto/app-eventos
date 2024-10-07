import React, { useState, useEffect } from 'react';

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsuarios(data));
    },[]);

    return(
        <div>
            <ul>
                { usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;