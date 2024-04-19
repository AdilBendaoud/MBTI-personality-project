import React, {useState,useEffect} from "react";
import DynamicForm from "./DynamicForm";
import axios from 'axios';

export default function OptionForm({ isUpdateForm = false }) {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const fetchFiliereList = async () => {
      try {
        const response = await axios.get('http://localhost:8888/api/question/list');
        const simplifiedFiliereList = response.data.result.map((question) => ({
          key: question._id,
          value: question.nom_fr,
        }));
        setQuestionList(simplifiedFiliereList)
      } catch (error) {
        console.error('Error fetching filiere list:', error);
      }
    };
    fetchFiliereList();
  }, []);
  const formData = [
    {
      fieldType: 'select',
      label: 'Question',
      name: 'question',
      selectOptions:questionList,
      required: true,
      message: 'Veuillez choisir question !',
    },
    {
      fieldType: 'input',
      label: 'Option en Francais',
      name: 'nom_fr',
      required: true,
      message: 'Veuillez saisir option !',
    },
    {
        fieldType: 'input',
        label: 'Option en Anglais',
        name: 'nom_en',
        required: true,
        message: 'Veuillez saisir option !',
    },
    {
        fieldType: 'input',
        label: 'Option en Arabe',
        name: 'nom_ar',
        required: true,
        message: 'Veuillez saisir option !',
    },
    {
        fieldType: 'input',
        label: 'Note',
        name: 'note',
        required: true,
        message: 'Veuillez saisir note !',
    }, 
  ];

  return (
    <DynamicForm fields={formData} />
  );
}
