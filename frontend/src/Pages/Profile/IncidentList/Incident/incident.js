import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import './incident.css';

const incident = ({incident, deleteIncident}) => (
    <li className="incident">
        <strong>CASO:</strong>
        <p>{incident.title}</p>

        <strong>DESCRIÇÃO:</strong>
        <p>{incident.description}</p>

        <strong>VALOR:</strong>
        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value) /* Formatação de valor */}</p>

        <button type="button" onClick={() => deleteIncident(incident.id)}>
            <FiTrash2 size={20} color="#A8A8B3"/>
        </button>
    </li>
);

export default incident;