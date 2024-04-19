import React from "react";

import EtudiantCrudModule from "@/modules/ProfCrudModule";
import EtudiantForm from "@/forms/EtudiantForm";

export default function Etudiant() {
  const entity = "etudiant";
  const searchConfig = {
    displayLabels: ["first_name", "last_name"],
    searchFields: "email,first_name,last_name",
    outputValue: "_id",
  };

  const panelTitle = "Panneaux Etudiants";
  const dataTableTitle = "Lists Etudiants";
  const entityDisplayLabels = ["email"];

  const readColumns = [
    { title: "Prenom", dataIndex: "first_name" },
    { title: "Nom", dataIndex: "last_name" },
    { title: "Filiere", dataIndex: 'filiere.nom' },
    { title: "Email", dataIndex: "email" },
    { title: "Niveau", dataIndex: "niveau" },
  ];

  const dataTableColumns = [
      { title: "Prenom", dataIndex: "first_name" },
      { title: "Nom", dataIndex: "last_name" },
      { title: "Filiere", dataIndex: ['filiere', 'nom'] },
      { title: "Email", dataIndex: "email" },
      { title: "Niveau", dataIndex: "niveau" },
  ];
  const ADD_NEW_ENTITY = "Ajouter Etudiant";
  const DATATABLE_TITLE = "Liste Etudiants";
  const ENTITY_NAME = "etudiant";
  const CREATE_ENTITY = "Creer Etudiant";
  const UPDATE_ENTITY = "Modifier Etudiant";

  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <EtudiantCrudModule
      createForm={<EtudiantForm />}
      updateForm={<EtudiantForm />}
      config={config}
    />
  );
}
