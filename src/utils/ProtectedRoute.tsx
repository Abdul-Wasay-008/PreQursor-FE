import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';  

const ProtectedRoutes: React.FC = () => {
    const token = localStorage.getItem('accessToken');

    if (token) {
        try {
            const decoded: any = jwtDecode(token);
            const isExpired = Date.now() >= decoded.exp * 1000; // Converting to milliseconds
            if (isExpired) {
                localStorage.removeItem('accessToken');
                return <Navigate to="/login" />; // Redirect to login if token is expired
            }
        } catch (error) {
            console.error('Error decoding token:', error);
            localStorage.removeItem('accessToken');
            return <Navigate to="/login" />; // Redirect to login on decoding error
        }
    }

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
