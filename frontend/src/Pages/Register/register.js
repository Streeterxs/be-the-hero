import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import { API } from '../../Services';
import RegisterForm from './RegisterForm';

import logoImg from '../../Assets/logo.svg';

import './register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    const handleRegister = async (event) => {
        event.preventDefault();
        const data = {name, email, whatsapp, city, uf};
        try {
            const response = await API.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert(`Erro no cadastro, tente novamente`);
        }
    };
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
                <RegisterForm
                    formSubmit={handleRegister}
                    changeName={(e) => setName(e.target.value)}
                    changeEmail={(e) => setEmail(e.target.value)}
                    changeWpp={(e) => setWhatsapp(e.target.value)}
                    changeCity={(e) => setCity(e.target.value)}
                    changeUf={(e) => setUf(e.target.value)}/>
            </div>
        </div>
    );
}

export default Register;