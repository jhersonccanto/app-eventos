import React, { useState, useEffect } from 'react';

function Autor(){
    const [autor, setAutor] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8084/api/autor')
        .then(response => response.json())
        .then(data => setAutor(data));
    },[]);

    return(
        <div>
    <table>
        <thead>
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>País</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            {autor.map(autor1 => (
                <tr key={autor1.id}>
                    <td>{autor1.nombres}</td>
                    <td>{autor1.apellidos}</td>
                    <td>{autor1.pais}</td>
                    <td>{autor1.estado}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

        
    );
}

export default Autor;