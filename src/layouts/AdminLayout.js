import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div
      style={{
        backgroundColor: '#fce5cd', // light orange
        minHeight: '100vh',
        padding: '30px',
        fontFamily: "Arial, sans-serif",
        color: '#212529',
      }}
    >
      <h1
  style={{
    textAlign: 'center',
    marginBottom: '30px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'normal',
  }}
>  NYUMBANI ADMIN DASHBOARD
</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
