import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

const Login = ({ history }) => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8888/api/prof/login', {
        email,
        password,
      });
      const { token, prof } = response.data.result;

      // Store the token and prof credentials in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('prof', JSON.stringify(prof));
      nav("/home");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setLoginError('Invalid credentials');
      } else {
        alert('Connected');
      }
    }
  };




  return (
    <Container maxWidth="sm" sx={{marginTop:20}}>
      <Typography variant="h5" gutterBottom>
        LOGIN
      </Typography>



      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{marginBottom:2}}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mt={2}
          sx={{marginBottom:2}}
        />
        <Button type="submit" sx={{widows:2}} variant="contained" color="primary" fullWidth mt={2}>
          Login
        </Button>
        {loginError && (
          <Typography variant="body2" color="error" mt={2}>
            {loginError}
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default Login;
