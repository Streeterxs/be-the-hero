import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import './incident.css';

const incident = () => (
    <li className="incident">
        <strong>CASO:</strong>
        <p>Caso teste.</p>

        <strong>DESCRIÇÃO:</strong>
        <p>Descrição teste.</p>

        <strong>VALOR:</strong>
        <p>R$ 120,00</p>

        <button type="button">
            <FiTrash2 size={20} color="#A8A8B3"/>
        </button>
    </li>
);

export default incident;