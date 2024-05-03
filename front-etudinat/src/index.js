import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './screens/Landing';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Catalogue from './screens/Catalogue';
import Test from './screens/Test';
import Result from './screens/Result';
import Login from './screens/login';
import AuthProvider from "./context/authContext";

// i18next.init({
//   interpolation: {
//     escapeValue: false
//   },
//   lng: document.querySelector('html').lang,
//   detection:{
//     order:['htmlTag','cookie'],
//     caches:['cookie']
//   },
//   resources:{
//     en:{
//       global : global_en
//     },
//     fr:{
//       global : global_fr
//     },
//     ar:{
//       global : global_ar
//     }
//   }
// })

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    resources:{
      en:{
        global : global_en
      },
      fr:{
        global : global_fr
      },
      ar:{
        global : global_ar
      }
    }
  })


ReactDOM.render(
  <>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='/login' element={<Login />} />
            <Route index element={<Landing />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path='/test/:testId/:title' element={<Test />}/>
            <Route path='/result/:personality' element={<Result />}/>
          </Route>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </I18nextProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
