import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../Assets/logo.svg';

import RegisterForm from './RegisterForm';

import './register.css';

const register = () => {
    return (
        <div className="base-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro </h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>

                </section>
                <RegisterForm/>
            </div>
        </div>
    );
}

export default register;