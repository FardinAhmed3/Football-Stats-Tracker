import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const GradientBackground = styled(Box)({
  background: 'linear-gradient(to right, #6a11cb, #1172ff)',
  minHeight: '92vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: '0',
  margin: '0',
});

const RegisterForm = styled(Paper)({
  padding: '2rem',
  maxWidth: '400px',
  width: '100%', // Ensure it doesn't overflow horizontally
  margin: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxSizing: 'border-box',
});

const Register = () => {
  const [username, setUsername] = useState('');
  const [realname, setRealname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register/', {
        username,
        realname,
        email,
        password,
      });
      console.log(response.data);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <GradientBackground>
      <Container>
        <RegisterForm elevation={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleRegister}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Real Name"
                  variant="outlined"
                  fullWidth
                  value={realname}
                  onChange={(e) => setRealname(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </RegisterForm>
      </Container>
    </GradientBackground>
  );
};

export default Register;
