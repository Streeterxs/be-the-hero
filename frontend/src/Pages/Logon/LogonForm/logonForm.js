import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './logonForm.css'

const logonForm = ({formSubmit, changeId}) => {
    return (
        <form className="logonForm" onSubmit={formSubmit}>
            <h1> Faça seu logon </h1>

            <input placeholder="Sua ID" onChange={changeId}/>
            <button type="submit" className="button">Entrar</button>

            <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro
            </Link>
        </form>
    );
}

export default logonForm;