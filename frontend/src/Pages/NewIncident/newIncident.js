import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import NewIncidenForm from './newIncidentForm';

import logoImg from '../../Assets/logo.svg';
import './newIncident.css';

const newIncident = () => (
    <div className="base-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>

            </section>
            <NewIncidenForm/>
        </div>
    </div>
);

export default newIncident;