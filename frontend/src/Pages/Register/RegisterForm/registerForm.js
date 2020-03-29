import React from 'react';

import './registerForm.css';

const registerForm = () => (
    <form className="registerForm">
        <input type="text" placeholder="Nome da ONG"/>
        <input type="email" placeholder="E-mail"/>
        <input type="text" placeholder="Whatsapp"/>
        <div className="inputGroup">
            <input type="text" placeholder="Cidade"/>
            <input type="text" placeholder="UF" style={{width: 80}}/>
        </div>
        <button className="button" type="submit">Cadastrar</button>
    </form>
);

export default registerForm;