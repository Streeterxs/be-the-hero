import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { API } from '../../Services'
import NewIncidenForm from './newIncidentForm';

import logoImg from '../../Assets/logo.svg';
import './newIncident.css';

const NewIncident = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const data = {title, description, value};
        try {
            await API.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.');
        }
    }
    return (
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
                <NewIncidenForm formSubmit={handleFormSubmit} changeTitle={setTitle} changeDesc={setDescription} changeValue={setValue}/>
            </div>
        </div>
    );
};

export default NewIncident;