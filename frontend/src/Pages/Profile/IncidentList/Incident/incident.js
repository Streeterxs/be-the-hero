import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import './incident.css';

const incident = ({incident}) => (
    <li className="incident">
        <strong>CASO:</strong>
        <p>{incident.title}</p>

        <strong>DESCRIÇÃO:</strong>
        <p>{incident.description}</p>

        <strong>VALOR:</strong>
        <p>{incident.value}</p>

        <button type="button">
            <FiTrash2 size={20} color="#A8A8B3"/>
        </button>
    </li>
);

export default incident;