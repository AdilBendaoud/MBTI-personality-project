import { useEffect, useState } from "react";
import EtudBox from "./components/EtudBox"
import Container from '@mui/material/Container';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';

const Home = () => {
    const [Etudiants, setEtudiants] = useState([]);
    const nav = useNavigate();
    const [message, setmessage] = useState("");

    const outerTheme = createTheme({
        palette: {
          primary: {
            main: orange[900],
          },
        },
      });

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;


    useEffect(() => {
        if (localStorage.getItem("prof") == null) {
            nav("/");
        }
        const getEtudiants = () => {
            axios.get(`http://localhost:8888/api/etudiant/search?filiere=${JSON.parse(localStorage.getItem("prof")).filiere}`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then((res) => {
                console.log(res.data.message + res.status);
                setEtudiants(res.data.result);
            }).catch((err) => {
                console.log(err.message + "dqawdwd");
            });
        }
        getEtudiants();
    }
        , [])


    const HandleNote = (e, etudiant) => {
        axios.post(`http://localhost:8888/api/note/create`, {
            prof: JSON.parse(localStorage.getItem("prof"))._id,
            etudiant: etudiant,
            note: e
        }).then((res) => {
            console.log(res.data.message + res.status);
            handleToast({ vertical: 'bottom', horizontal: 'center' }, "Note Added!");
        }).catch((err) => {
            console.log(err.message + "dqawdwd");
            handleToast({ vertical: 'bottom', horizontal: 'center' }, "Error");
        });
    }
    const handleCloseToast = () => {
        setState({ ...state, open: false });
    };

    const handleToast = (newState, message) => {
        setState({ ...newState, open: true });
        setmessage(message);
        setTimeout(handleCloseToast, 2000);
    }

    return (<ThemeProvider theme={outerTheme}>
        <NavBar />
        <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
                Votre etudiants
            </Typography>
            {Etudiants.map((e, i) => {
                return <EtudBox etudiant={e} handle={(event, etudiant) => HandleNote(event, etudiant)} />
            })}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleCloseToast}
                message={message}
                key={vertical + horizontal}
            />
        </Container>
    </ThemeProvider>)
}

export default Home;