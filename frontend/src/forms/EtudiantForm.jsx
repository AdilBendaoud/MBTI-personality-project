import React, {useState,useEffect} from "react";
import DynamicForm from "./DynamicForm";
import axios from 'axios';

export default function EtudiantForm({ isUpdateForm = false }) {
  const [filiereList, setFiliereList] = useState([]);

  useEffect(() => {
    const fetchFiliereList = async () => {
      try {
        const response = await axios.get('http://localhost:8888/api/filiere/list');
        const simplifiedFiliereList = response.data.result.map((filiere) => ({
          key: filiere._id,
          value: filiere.nom,
        }));
        setFiliereList(simplifiedFiliereList)
      } catch (error) {
        console.error('Error fetching filiere list:', error);
      }
    };

    fetchFiliereList();
  }, []);
  const formData = [
    {
      fieldType: 'select',
      label: 'Filere',
      name: 'filiere',
      selectOptions:filiereList,
      required: true,
      message: 'Veuillez saisir filiere !',
    },
    {
      fieldType: 'input',
      label: 'Prenom',
      name: 'first_name',
      required: true,
      message: 'Veuillez saisir prenom !',
      style: {
        display: 'inline-block',
        width: 'calc(50%)',
        paddingRight: '5px',
      },
    },
    {
      fieldType: 'input',
      label: 'Nom',
      name: 'last_name',
      required: true,
      message: 'Veuillez saisir nom !',
      style: {
        display: 'inline-block',
        width: 'calc(50%)',
        paddingRight: '5px',
      },
    },
    {
      fieldType: 'input',
      label: 'E-mail',
      name: 'email',
      inputType:{
        type: "email",
        message: "E-mail invalide !",
      },
      required: true,
      message: 'Veuillez saisir E-mail!',
    },
    {
      fieldType: 'password',
      label: 'Mot de passe',
      name: 'password',
      required: true,
      message: 'Veuillez saisir mot de passe !',
    },
    {
        fieldType: 'input',
        label: 'Niveau',
        name: 'niveau',
        required: true,
        message: 'Veuillez saisir niveau !',
      },
  ];
  const formData2 = [
    {
      fieldType: 'select',
      label: 'Filere',
      name: 'filiere',
      selectOptions:filiereList,
      required: true,
      message: 'Veuillez saisir filiere !',
    },
    {
      fieldType: 'input',
      label: 'Prenom',
      name: 'first_name',
      required: true,
      message: 'Veuillez saisir prenom !',
      style: {
        display: 'inline-block',
        width: 'calc(50%)',
        paddingRight: '5px',
      },
    },
    {
      fieldType: 'input',
      label: 'Nom',
      name: 'last_name',
      required: true,
      message: 'Veuillez saisir nom !',
      style: {
        display: 'inline-block',
        width: 'calc(50%)',
        paddingRight: '5px',
      },
    },
    {
      fieldType: 'input',
      label: 'E-mail',
      name: 'email',
      inputType:{
        type: "email",
        message: "E-mail invalide !",
      },
      required: true,
      message: 'Veuillez saisir E-mail!',
    },
    {
        fieldType: 'input',
        label: 'Niveau',
        name: 'niveau',
        required: true,
        message: 'Veuillez saisir niveau !',
      },
  ];
  
  return (
    <DynamicForm fields={isUpdateForm? formData2 : formData} />
  );
}
