// Patients.jsx

import React, { useState } from 'react';

function Patients () {
  // liste des patients
  const [patients, setPatients] = useState([
    { id: 1, prenom: 'Moustapha', nom: 'FALL', profil: "VOIR" },
    { id: 2, prenom: 'Almatou', nom: 'SECK', profil: "VOIR" },
    { id: 3, prenom: 'Pathé', nom: 'FALL', profil: "VOIR" },
    { id: 4, prenom: 'Cheikh Bara', nom: 'DIOP', profil: "VOIR" },

    
  ]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-sky-600">Mes Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} className="my-2 border-b border-gray-300 py-2">
            <div>{patient.prenom}</div>
            <div>{patient.nom}</div>
            <div>{patient.profil}</div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
