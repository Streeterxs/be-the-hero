import React from 'react';
import './logon.css';
import { LogonForm } from './LogonForm';
import Aux from '../../Hocs';

import heroesImg from '../../Assets/heroes.png';
import logoImg from '../../Assets/logo.svg';

const logon = () => {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <LogonForm/>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

export default logon;