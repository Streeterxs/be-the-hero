import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './logonForm.css'

const logonForm = () => {
    return (
        <form className="logonForm">
            <h1> Faça seu logon </h1>

            <input placeholder="Sua ID"/>
            <button type="submit" className="button">Entrar</button>

            <a href="/register">
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro
            </a>
        </form>
    );
}

export default logonForm;