import React, { useEffect, useState } from 'react'
import HorizontalBarChart from './HorizontalBarChart'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

export const Career = ({personality}) => {
  // const data = {
  //   "Ingénierie Informatique et Réseaux": 50,
  //   "Ingénierie Financière et Audit": 100,
  //   "Geni civil":30,
  //   "mohndis i3lamyat":46
  // };
  const {t, i18n} = useTranslation('global');
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    try {
      const response = await axios.post('http://localhost:8888/api/recommandation',{"personality":personality})
      const transformedData = response.data.results.reduce((acc, item) => {
        const filiereName = item.filieres[0].nom;
        const avgNote = convertToPercentage(item.avg_note);
        acc[filiereName] = avgNote;
        return acc;
      }, {});
      setData(transformedData);
    } catch (error) {
      console.log(error);
    }
  },[personality])

  function convertToPercentage(value) {
    // Ensure the value is within the original range
    const clampedValue = Math.min(Math.max(value, 1), 5);
  
    // Calculate the percentage using linear mapping
    const percentage = ((clampedValue - 1) / 4) * 100;
    
    return percentage;
  }

  return (
    <div style={{marginTop:100,marginBottom:120}}>
      <h3 className=' fw-meduim'>{t("major.title")} :</h3>
      <p style={{fontSize:18,marginBottom:50}}>{t("major.paragraphe")}</p>
      <HorizontalBarChart data={data}/>
    </div>
  )
}
