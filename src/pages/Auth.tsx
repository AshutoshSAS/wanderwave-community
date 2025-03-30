
import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';

const Auth = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // If user is logged in and trying to access auth pages, redirect to home
  if (user && !loading && !location.pathname.includes('reset-password')) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-md mx-auto p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Auth;
