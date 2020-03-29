import React from 'react';
import { Link } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import IncidentList from './IncidentList';

import logoImg from '../../Assets/logo.svg';

import './profile.css';

const profile = () => (
    <div className="profile-container">
        <header>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vinda, APAD</span>
            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button">
                <FiPower size={18} color="#E02041"/>
            </button>
        </header>
        <h1>Casos Cadastrados</h1>
        <IncidentList/>
    </div>
)

export default profile;