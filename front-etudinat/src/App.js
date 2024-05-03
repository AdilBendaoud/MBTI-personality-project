import React,{useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import i18next from "i18next";
import TopNavbar from "./components/Nav/TopNavbar";
import Footer from "./components/Sections/Footer";
import {Outlet } from "react-router-dom";
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";

export default function App() {
  const currentLanguage = Cookies.get('i18next') || 'en';
  const {i18n} = useTranslation('global');
  useEffect(() => {
   document.body.dir = currentLanguage == 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage,i18n.language]);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <TopNavbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

