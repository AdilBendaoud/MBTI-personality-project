import React from "react";

import FiliereCrudModule from "@/modules/ProfCrudModule";
import FiliereForm from "@/forms/FiliereForm";

export default function Filiere() {
  const entity = "filiere";
  const searchConfig = {
    displayLabels: ["nom"],
    searchFields: "nom",
    outputValue: "_id",
  };

  const panelTitle = "Panneaux Filières";
  const dataTableTitle = "Lists Filières";
  const entityDisplayLabels = ["email"];

  const readColumns = [
    { title: "Nom", dataIndex: "nom" },
    { title: "Description", dataIndex: "description" },
    { title: "Dueree", dataIndex: "duree" },
  ];

  const dataTableColumns = [
    { title: "Nom", dataIndex: "nom" },
    { title: "Description", dataIndex: "description" },
    { title: "Dueree", dataIndex: "duree" },
  ];
  const ADD_NEW_ENTITY = "Ajouter Filières";
  const DATATABLE_TITLE = "Liste Filières";
  const ENTITY_NAME = "filiere";
  const CREATE_ENTITY = "Creer Filières";
  const UPDATE_ENTITY = "Modifier Filières";

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
    <FiliereCrudModule
      createForm={<FiliereForm />}
      updateForm={<FiliereForm />}
      config={config}
    />
  );
}
