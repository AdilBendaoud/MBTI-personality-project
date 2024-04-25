import React, {useState,useEffect} from "react";
import { Button, Form, Input } from "antd";
import DynamicForm from "./DynamicForm";
import axios from 'axios';

export default function ProfForm({ isUpdateForm = false }) {
  const [filiereList, setFiliereList] = useState([]);

  useEffect(() => {
    // Function to fetch filiere list
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
  
    // Call the fetch function
    fetchFiliereList();
  }, []);
  const formData = [
    {
      fieldType: 'select',
      label: 'Filere',
      name: 'filiere',
      selectOptions:filiereList,
      required: true,
      message: 'Please input your company name!',
    },
    {
      fieldType: 'input',
      label: 'Prenom',
      name: 'first_name',
      required: true,
      message: 'Veuillez saisir votre prenom !',
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
      message: 'Veuillez saisir votre nom !',
      style: {
        display: 'inline-block',
        width: 'calc(50%)',
        paddingRight: '5px',
      },
    },
    {
      fieldType: 'input',
      label: 'Telephone',
      name: 'phone',
      required: true,
      message: 'Please input your phone!',
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
      message: 'Veuillez saisir votre E-mail!',
    },
    {
      fieldType: 'password',
      label: 'Mot de passe',
      name: 'password',
      required: true,
      message: 'Veuillez saisir mot de passe !',
      inputType:{
        type: "password",
      },
    },
  ];
  const formData2 = [
    {
      fieldType: 'select',
      label: 'Filere',
      name: 'filiere',
      selectOptions:filiereList,
      required: true,
      message: 'Please input your company name!',
    },
    {
      fieldType: 'input',
      label: 'Prenom',
      name: 'first_name',
      required: true,
      message: 'Veuillez saisir votre prenom !',
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
      message: 'Veuillez saisir votre nom !',
      style: {
        display: 'inline-block',
        width: 'calc(50%)',
        paddingRight: '5px',
      },
    },
    {
      fieldType: 'input',
      label: 'Telephone',
      name: 'phone',
      required: true,
      message: 'Please input your phone!',
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
      message: 'Veuillez saisir votre E-mail!',
    },
  ];
  
  return (
    <DynamicForm fields={isUpdateForm ? formData2 : formData} />
  );
}
