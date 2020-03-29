import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { API } from '../../Services';
import { LogonForm } from './LogonForm';

import heroesImg from '../../Assets/heroes.png';
import logoImg from '../../Assets/logo.svg';

import './logon.css';

const Logon = () => {
    const [id, setId] = useState('');
    const history = useHistory();

    const handleLogon = async (event) => {
        event.preventDefault();
        try {
            const response = await API.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    };

    return (
        <div className="base-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <LogonForm formSubmit={handleLogon} changeId={e => setId(e.target.value)}/>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

export default Logon;