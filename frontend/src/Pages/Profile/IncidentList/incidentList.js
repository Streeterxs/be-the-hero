import React from 'react';

import Incident from './Incident';

import './incidentList.css'

const incidentList = () => (
    <ul className="incidentList">
        <Incident/>
        <Incident/>
        <Incident/>
    </ul>
);

export default incidentList;