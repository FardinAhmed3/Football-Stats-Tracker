import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

const ProtectedRoute = () => {
    const { authTokens } = useContext(AuthContext);

    return authTokens ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
