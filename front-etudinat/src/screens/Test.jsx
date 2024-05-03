import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Test = () => {
    const [questionsList, setQuestionsList] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [totalNote, setTotalNote] = useState(0);
    const [personality, setPersonality] = useState('');
    const { testId, title } = useParams();
    const navigate = useNavigate();
    const {user} = useAuth();
    
    const handleOptionSelect = (questionId, optionId) => {
        // Check if the questionId already exists in selectedOptions
        const existingQuestionIndex = selectedOptions.findIndex((item) => item.questionId === questionId);
    
        if (existingQuestionIndex !== -1) {
          // If the questionId exists, update the corresponding optionId
          const updatedOptions = [...selectedOptions];
          updatedOptions[existingQuestionIndex].optionId = optionId;
          setSelectedOptions(updatedOptions);
        } else {
          // If the questionId does not exist, add a new entry to selectedOptions
          setSelectedOptions((prevOptions) => [
            ...prevOptions,
            {
              questionId: questionId,
              optionId: optionId,
            },
          ]);
        }
      };

    const calculateTotalNote = async (e) => { 
        e.preventDefault();
        if(selectedOptions.length<28){
            alert("All the fields are required !!");
            return
        }
        let total = 0;
        questionsList.forEach((question) => {
        const selectedOption = selectedOptions.find((item) => item.questionId === question._id);
        if (selectedOption) {
            const option = question.options.find((opt) => opt._id === selectedOption.optionId);
            if (option) {
            total += option.note;
            }
        }
        });
        if(user!== null){
            try {
                const response = await axios.post('http://localhost:8888/api/etudiantTest/', {"questions":selectedOptions,"etudiant":user._id,"testId":testId});
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
            console.log({"questions":selectedOptions,"etudiant":user,"testId":testId});
        }
        setTotalNote(total);
        
        const arrayNum = total.toString().split("").map(Number);
        var personality = '';
        personality+= arrayNum[0]>arrayNum[1] ? 'E' : 'I';
        personality+= arrayNum[2]>arrayNum[3] ? 'S' : 'N';
        personality+= arrayNum[4]>arrayNum[5] ? 'T' : 'F';
        personality+= arrayNum[6]>arrayNum[7] ? 'J' : 'P';
        setPersonality(personality);

        try {
            await axios.post("http://localhost:8888/api/etudiant/updatePersonality",
            {
                "etudiantId":user._id,
                "personnalite":personality
            })
        } catch (error) {
            console.log(error)
        }

        navigate(`/result/${personality}`);
    };
    
    const getQuestionOpions = async ()=>{
        try {
            const response = await axios.get(`http://localhost:8888/api/etudiantTest/${testId}`);
            setQuestionsList(response.data.result)
        } catch (error) {
            console.log("Error: ",error);
        }
    }

    useEffect(()=>{
        getQuestionOpions();
    },[testId])

  return (
    <main style={{minHeight:'100vh',marginTop:80}}>    
        <div className="container">
            <section className="py-5 text-center container">
                <div className="row py-lg-4">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1>{title}</h1>
                    </div>
                </div>
            </section>
            <form method="post" className='bg-body-tertiary py-5'>
                {questionsList.map(question=><Question onChange={handleOptionSelect} question={question}/>)}
                <div className='d-flex align-items-center justify-content-center my-4'>
                    <button type='submit' className='btn btn-primary btn-lg align-items-center' onClick={calculateTotalNote}>Submit</button>
                </div>
            </form>
        </div>
    </main>
  );
};

const Question = ({question, onChange})=>{
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return(
        <div className={ currentLanguage==='en' || currentLanguage==='fr' ? 'ps-5 pb-4 d-flex flex-column ' :'d-flex flex-column  pe-5 pb-4'}>
            <h5>{currentLanguage==='en' ? question.nom_en : currentLanguage === 'fr' ? question.nom_fr : question.nom_ar} :</h5>
            <div className={ currentLanguage==='en' || currentLanguage==='fr' ? 'ps-5' :'pe-5'} style={{fontSize:18}}>
                {question.options.map(option =>{
                    return(
                        <div className="form-check">   
                            <label className="form-check-label ps-3 fs-6" htmlFor={option._id}>
                                <input
                                    id={option._id}
                                    required
                                    className="form-check-input"
                                    type="radio"
                                    name={question._id} 
                                    value="option1" 
                                    onChange={() => onChange(question._id, option._id)}/>
                                {currentLanguage==='en' ? option.nom_en : currentLanguage === 'fr' ? option.nom_fr : option.nom_ar}
                            </label>
                        </div>
                    )
             })}
            </div>
        </div>
    )
}

export default Test;