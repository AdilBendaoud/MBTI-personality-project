import React from "react";

import FiliereCrudModule from "@/modules/ProfCrudModule";
import OptionForm from "@/forms/OptionForm";

export default function Option() {
  const entity = "option";
  const searchConfig = {
    displayLabels: ["nom_fr"],
    searchFields: "nom_fr",
    outputValue: "_id",
  };

  const panelTitle = "Panneaux Options";
  const dataTableTitle = "Lists Options";
  const entityDisplayLabels = ["nom_fr"];

  const readColumns = [
    { title: "Question", dataIndex: "question.nom_fr" },
    { title: "Option en Francais", dataIndex: "nom_fr" },
    { title: "Option en Englais", dataIndex: "nom_en" },
    { title: "Option en Arabe", dataIndex: "nom_ar" },
    { title: "Note", dataIndex: "note" },
  ];

  const dataTableColumns = [
    { title: "Question", dataIndex: ["question","nom_fr"] },
    { title: "Option en Francais", dataIndex: "nom_fr" },
    { title: "Option en Englais", dataIndex: "nom_en" },
    { title: "Option en Arabe", dataIndex: "nom_ar" },
    { title: "Note", dataIndex: "note" },
  ];
  const ADD_NEW_ENTITY = "Ajouter Options";
  const DATATABLE_TITLE = "Liste Options";
  const ENTITY_NAME = "option";
  const CREATE_ENTITY = "Creer Options";
  const UPDATE_ENTITY = "Modifier Options";

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
      createForm={<OptionForm />}
      updateForm={<OptionForm />}
      config={config}
    />
  );
}
