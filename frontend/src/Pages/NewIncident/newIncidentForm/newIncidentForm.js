import React from 'react';

import './newIncidentForm.css';

const newIncidentForm = ({formSubmit, changeTitle, changeDesc, changeValue}) => (

    <form className="newIncidentForm" onSubmit={formSubmit}>
        <input type="text" placeholder="Título do Caso" onChange={(e) => {changeTitle(e.target.value)}}/>
        <textarea placeholder="Descrição" onChange={(e) => {changeDesc(e.target.value)}}/>
        <input type="text" placeholder="Valor em reais" onChange={(e) => {changeValue(e.target.value)}}/>
        <button className="button" type="submit">Cadastrar</button>
    </form>

)

export default newIncidentForm;