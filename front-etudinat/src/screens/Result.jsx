import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PersonalityDetails from '../components/PersonalityDetails';
import { Career } from '../components/Career';
import { useAuth } from '../context/authContext';
import dataEn from "../data"
import dataFr from "../dataFr"
import dataAr from "../dataAr"

const Result = () => {
    const {personality} = useParams()
    const {user} = useAuth();
    const {i18n, t} = useTranslation('global');
    const exist = dataEn[1].types.some(perso => perso.type === personality);
    const persoData = i18n.language=='en' ? dataEn : i18n.language=='fr' ? dataFr : dataAr;
    if(!exist){
        return(
            <main dir='ltr' style={{minHeight:'69vh',marginTop:80, display:'flex', alignItems:'center',justifyContent:'center'}}>
                <div style={{height:'50vh'}} className="error-template">
                    <h1 className='text-center'>Oops!</h1>
                    <h2 className='text-center'>404 Not Found</h2>
                    <div className="error-details text-center mb-4">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div className="error-actions justify-content-center d-flex">
                        <Link to="/" className="btn btn-primary btn-lg">
                            <span className="glyphicon glyphicon-home"></span>
                            Take Me Home 
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
  return (
    <main style={{minHeight:'100vh',marginTop:80}}>    
        <div>
            <section className="text-center" style={{backgroundImage: `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`,paddingTop:45,paddingBottom:45}}>
                <div className="row py-lg-4">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className=' fw-bold text-white'>{t("resultat")} : {personality}</h1>
                    </div>
                </div>
            </section>
            <section  className="container">
                <PersonalityDetails data={persoData} personality={personality} />
                {user == null && <Career personality={personality}/>} 
            </section>
        </div>
    </main>
  );
};


export default Result;