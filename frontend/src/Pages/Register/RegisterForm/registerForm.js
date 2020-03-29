import React from 'react';

import './registerForm.css';

const registerForm = ({formSubmit, changeName, changeEmail, changeWpp, changeCity, changeUf}) => (

    <form className="registerForm" onSubmit={formSubmit}>
        <input type="text" placeholder="Nome da ONG" onChange={changeName}/>
        <input type="email" placeholder="E-mail" onChange={changeEmail}/>
        <input type="text" placeholder="Whatsapp" onChange={changeWpp}/>

        <div className="inputGroup">
            <input type="text" placeholder="Cidade" onChange={changeCity}/>
            <input type="text" placeholder="UF" style={{width: 80}} onChange={changeUf}/>
        </div>

        <button className="button" type="submit">Cadastrar</button>
    </form>
    
);

export default registerForm;