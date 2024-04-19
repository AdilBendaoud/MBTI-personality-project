import React,{useState, useEffect} from "react";
import { Button, Form, Input } from "antd";
import DynamicForm from "./DynamicForm";
import axios from 'axios';

export default function QuestionFrom({ isUpdateForm = false }) {
  const [testList, setTestList] = useState([]);
  
  useEffect(() => {
    const fetchFiliereList = async () => {
      try {
        const response = await axios.get('http://localhost:8888/api/test/list');
        const simplifiedFiliereList = response.data.result.map((filiere) => ({
          key: filiere._id,
          value: filiere.nom,
        }));
        setTestList(simplifiedFiliereList)
        console.log(simplifiedFiliereList)
      } catch (error) {
        console.error('Error fetching filiere list:', error);
      }
    };

    fetchFiliereList();
  }, []);
  const formData = [
    {
      fieldType: 'select',
      label: 'Test',
      name: 'test',
      selectOptions:testList,
      required: true,
      message: 'Please input your test!',
    },
    {
      fieldType: 'input',
      label: 'Question en Francais',
      name: 'nom_fr',
      required: true,
      message: 'Veuillez saisir question!',
    },
    {
      fieldType: 'input',
      label: 'Question en Anglais',
      name: 'nom_en',
      required: true,
      message: 'Veuillez saisir votre nom !',
    },
    {
      fieldType: 'input',
      label: 'Question en Arabe',
      name: 'nom_ar',
      required: true,
      message: 'Please input your phone!',
    },
  ];
  
  return (
    <DynamicForm fields={formData} />
  );
}
