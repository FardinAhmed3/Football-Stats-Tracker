import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
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

const LoginForm = styled(Paper)({
    padding: '3rem',
    maxWidth: '400px',
    width: '50%', // Ensure it doesn't overflow horizontally
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxSizing: 'border-box',
  });


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/', {
                username,
                password
            });
            setAuthTokens(response.data);
            localStorage.setItem('tokens', JSON.stringify(response.data));
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
    <GradientBackground>
        <Container>
            <LoginForm elevation={6}>
                <Typography variant="h4" components="h2" gutterBottom>
                    Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="Username"
                                varient="outlined"
                                fullWidth
                                value={username}
                                onChange={(e)=> setUsername(e.target.value)} placeholder="Username" required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Password"
                                varient="outlined"
                                type="password"
                                fullWidth
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)} placeholder="Password" required />
                            </Grid>
                            <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Login
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
            </LoginForm>
        </Container>
    </GradientBackground>
    );
};

export default Login;
{/* <div>
<h2>Login</h2>
<form onSubmit={handleLogin}>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
    <button type="submit">Login</button>
<
/form>
</div> */}