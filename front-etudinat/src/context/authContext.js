import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  
  const loginAction = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8888/api/etudiant/login", {email, password});
      if (response) {
        console.log(response.data)
        setUser(response.data.result.etud);
        setToken(response.data.result.token);
        localStorage.setItem("site", response.data.result.token);
        localStorage.setItem("user", JSON.stringify(response.data.result.etud))
        navigate("/");
        return;
      }
      throw new Error(response.message);
    } catch (err) {
      console.error(err);
    }
  };

  const isLogedIn = () =>{
    const token = localStorage.getItem("site");
    const usr = localStorage.getItem("user");
    setToken(token);
    setUser(JSON.parse(usr));
  }

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  useEffect(()=>{
    isLogedIn();
    console.log(user);
  },[])

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};