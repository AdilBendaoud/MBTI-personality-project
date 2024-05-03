import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const PersonalityDetails = ({data, personality}) => {
    const deco = personality.split("");
    const {i18n} = useTranslation('global');
    const personDetails = data[1].types.filter(it => it.type==personality)[0];
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 order-md-last d-flex justify-content-center align-items-center">
            <img style={{alignSelf:'center'}} src={require(`../assets/svg/Personality/${personality}.svg`).default}/>
          </div>
          <div className="col-md-6 order-md-first d-flex align-items-center justify-content-center">
            <div>
              <h1 className="mb-4 fw-bold text-primary">{personality} - {personDetails.title}</h1>
              <div>
                  <ul className='p-0'>
                    {deco.map(item =>
                    <li className='mb-2'>
                      <strong>{item}:</strong> {data[0].dichotomies.filter(it=> it.type == item)[0].description} - {data[0].dichotomies.filter(it=> it.type == item)[0].meaning}
                    </li>)}
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          {i18n.language == 'en' ?
          <h3 className=' fw-meduim'>Who is the {personality} personality type ?</h3>:
          i18n.language == 'fr' ?
          <h3 className='fw-medium'>Quel est le type de personnalité {personality} ?</h3>:
          <h3 className='fw-medium'>ما هو نوع الشخصية {personality}؟</h3>
        }
          <p>{personDetails.description}</p>
        </div>
        <div className='d-flex justify-content-around'>
          <div>
          {i18n.language=='en' ?
            <h4>Traits</h4>: i18n.language=='fr' ?
            <h4>Caractéristiques</h4>:
            <h4>صفات</h4>
          }
            <ul style={{listStyle:'inherit'}}>
              {personDetails.traits.map(it=> <li>{it}</li>)}
            </ul>
          </div>
          <div>
            {i18n.language=='en' ?
            <h4>Strengths</h4>: i18n.language=='fr' ?
            <h4>Forces</h4>:
            <h4>نقاط القوة</h4>
          }
            <ul style={{listStyle:'inherit'}}>
              {personDetails.strengths.map(it=> <li>{it}</li>)}
            </ul>
          </div>
          <div>
          {i18n.language=='en' ?
            <h4>Weaknesses</h4>: i18n.language=='fr' ?
            <h4>Faiblesses</h4>:
            <h4>نقاط الضعف</h4>
          }
            <ul style={{listStyle:'inherit'}}>
              {personDetails.weaknesses.map(it=> <li>{it}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default PersonalityDetails;