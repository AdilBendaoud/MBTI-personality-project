import React from "react";
// Sections
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Contact from "../components/Sections/Contact";

export default function Landing({dir}) {
  return (
    <>
      <Header dir={dir}  />
      <Services  dir={dir}  />
      <Contact  dir={dir}  />
    </>
  );
}


