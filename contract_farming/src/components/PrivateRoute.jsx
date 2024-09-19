// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = true; // Replace this with actual authentication logic

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Component : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
