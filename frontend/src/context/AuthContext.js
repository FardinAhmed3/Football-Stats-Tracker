import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => 
        localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (authTokens) {
                refreshTokens();
            }
        }, 15 * 60 * 1000); // Refresh tokens every 15 minutes
        return () => clearInterval(interval);
    }, [authTokens]);

    const refreshTokens = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/token/refresh/', {
                refresh: authTokens.refresh
            });
            setAuthTokens(response.data);
            localStorage.setItem('tokens', JSON.stringify(response.data));
        } catch (error) {
            console.error(error);
            logout();
        }
    };

    const logout = () => {
        setAuthTokens(null);
        localStorage.removeItem('tokens');
    };

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
