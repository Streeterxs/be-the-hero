import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import IncidentList from './IncidentList';

import { API } from '../../Services';

import logoImg from '../../Assets/logo.svg';

import './profile.css';

const Profile = () => {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const [ incidents, setIncidents ] = useState([]);
    const history = useHistory();

    // useEffect() recebe 2 parâmetros, o primeiro é qual função será executada,
    // o segundo é um array de dependências o qual executará a função selecionada toda vez que as dependências forem alteradas.
    // No caso de array vazia, a função será executada apenas uma vez na criação do componente;
    useEffect(() => {
        API.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]); 

    const handleDeleteIncident = async (id) => {
        try {
            API.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    };

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <IncidentList incidents={incidents} incidentDeleteEvent={handleDeleteIncident}/>
        </div>
    );
}

export default Profile;