import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import logo from "../../assets/img/logo 1.png"
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/authContext";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [t, i18n] = useTranslation("global");
  const {user, logOut} = useAuth();

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter align-items-center">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img src={logo} width={70} />
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
              {t("Navbar.home")}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
              {t("Navbar.services")}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/catalogue" className="radius8" style={{ padding: "10px 15px" }}>
              {t("Navbar.btn")}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
              {t("Navbar.contact")}
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
          {
            user==null? 
            <li className="semiBold font15 pointer">
              <Link to="/login" style={{ padding: "10px 30px 10px 0" }}>
                {t("Navbar.login")}
              </Link>
            </li> : <span style={{marginRight:20,fontWeight:"bold"}}>{user.first_name} {user.last_name}</span>
          }
            <div className="d-flex align-items-center mx-3">
              <select
                id="language"
                onChange={handleLanguageChange}
                defaultValue={i18n.language}
                className="form-control border-dark"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>
            {user != null && <div className="btn text-white" style={{backgroundColor:'#7620ff'}} onClick={()=>logOut()}>Log out</div>    }
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


