import React from 'react';

import Incident from './Incident';

import './incidentList.css'

const incidentList = ({incidents}) => (
    <ul className="incidentList">
        {
            incidents.map((incident, index) => (<Incident key={index} incident={incident}/>))
        }
    </ul>
);

export default incidentList;