import React from "react";

import ProfCrudModule from "@/modules/ProfCrudModule";
import ProfForm from "@/forms/ProfForm";

export default function Prof() {
  const entity = "prof";
  const searchConfig = {
    displayLabels: ["first_name", "last_name"],
    searchFields: "email,first_name,last_name",
    outputValue: "_id",
  };

  const panelTitle = "Panneaux Enseignants";
  const dataTableTitle = "Lists Enseignants";
  const entityDisplayLabels = ["email"];

  const readColumns = [
    { title: "Filiere", dataIndex: 'filiere.nom'},
    { title: "Prenom", dataIndex: "first_name" },
    { title: "Nom", dataIndex: "last_name" },
    { title: "Telephone", dataIndex: "phone" },
    { title: "Email", dataIndex: "email" },
  ];

  const dataTableColumns = [
    { title: "Filiere", dataIndex: ['filiere', 'nom'] },
    { title: "Prenom", dataIndex: "first_name" },
    { title: "Nom", dataIndex: "last_name" },
    { title: "Telephone", dataIndex: "phone" },
    { title: "Email", dataIndex: "email" },
  ];
  const ADD_NEW_ENTITY = "Ajouter Enseignants";
  const DATATABLE_TITLE = "Liste Enseignants";
  const ENTITY_NAME = "prof";
  const CREATE_ENTITY = "Creer Enseignants";
  const UPDATE_ENTITY = "Modifier Enseignants";

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
    <ProfCrudModule
      createForm={<ProfForm />}
      updateForm={<ProfForm isUpdateForm={true} />}
      config={config}
    />
  );
}
