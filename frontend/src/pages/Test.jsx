import React from "react";

import FiliereCrudModule from "@/modules/ProfCrudModule";
import TestForm from "@/forms/TestForm";

export default function Question() {
  const entity = "test";
  const searchConfig = {
    displayLabels: ["nom"],
    searchFields: "nom",
    outputValue: "_id",
  };

  const panelTitle = "Panneaux Tests";
  const dataTableTitle = "Lists Tests";
  const entityDisplayLabels = ["nom"];

  const readColumns = [
    { title: "Nom", dataIndex: "nom" },
    { title: "Description", dataIndex: "description" },
  ];

  const dataTableColumns = [
    { title: "Nom", dataIndex: "nom" },
    { title: "Description", dataIndex: "description" },
  ];
  const ADD_NEW_ENTITY = "Ajouter Tests";
  const DATATABLE_TITLE = "Liste Tests";
  const ENTITY_NAME = "test";
  const CREATE_ENTITY = "Creer Tests";
  const UPDATE_ENTITY = "Modifier Tests";

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
      createForm={<TestForm />}
      updateForm={<TestForm />}
      config={config}
    />
  );
}
