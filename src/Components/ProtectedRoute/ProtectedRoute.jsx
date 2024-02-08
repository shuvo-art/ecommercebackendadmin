import React from 'react';
import './ProtectedRouter.css';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminContext } from '../../Context/AdminContext';

// Remove isVerified prop
const ProtectedRoute = ({isVerified, children }) => {

    if(!isVerified) {
        return <Navigate to="/" replace />
    }
    return children;
};

export default ProtectedRoute;


