import React from 'react';

import Incident from './Incident';

import './incidentList.css'

const incidentList = ({incidents, incidentDeleteEvent}) => (
    <ul className="incidentList">
        {
            incidents.map((incident, index) => (<Incident key={index} incident={incident} deleteIncident={incidentDeleteEvent}/>))
        }
    </ul>
);

export default incidentList;