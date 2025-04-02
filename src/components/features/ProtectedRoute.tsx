import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem('authorized') === 'true';
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

export default ProtectedRoute;
