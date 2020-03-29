import React from 'react';

import './newIncidentForm.css';

const newIncidentForm = () => (
    <form className="newIncidentForm">
        <input type="text" placeholder="Título do Caso"/>
        <textarea type="email" placeholder="Descrição"/>
        <input type="text" placeholder="Valor em reais"/>
        <button className="button" type="submit">Cadastrar</button>
    </form>
)

export default newIncidentForm;