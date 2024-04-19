import React from "react";

import FiliereCrudModule from "@/modules/ProfCrudModule";
import QuestionFrom from "@/forms/QuestionForm";


export default function Question() {
  const entity = "question";
  const searchConfig = {
    displayLabels: ["nom_fr"],
    searchFields: "nom_fr",
    outputValue: "_id",
  };

  const panelTitle = "Panneaux Questions";
  const dataTableTitle = "Lists Questions";
  const entityDisplayLabels = ["nom_en"];

  const readColumns = [
    { title: "Test", dataIndex: "test.nom" },
    { title: "Question en Francais", dataIndex: "nom_fr" },
    { title: "Question en Englais", dataIndex: "nom_en" },
    { title: "Question en Arabe", dataIndex: "nom_ar" },
  ];

  const dataTableColumns = [
    { title: "Test", dataIndex: ["test","nom"] },
    { title: "Question en Francais", dataIndex: "nom_fr" },
    { title: "Question en Englais", dataIndex: "nom_en" },
    { title: "Question en Arabe", dataIndex: "nom_ar" },
  ];
  const ADD_NEW_ENTITY = "Ajouter Questions";
  const DATATABLE_TITLE = "Liste Questions";
  const ENTITY_NAME = "question";
  const CREATE_ENTITY = "Creer Questions";
  const UPDATE_ENTITY = "Modifier Questions";

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
      createForm={<QuestionFrom />}
      updateForm={<QuestionFrom />}
      config={config}
    />
  );
}
