// src/Dashboard.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage or remove tokens (this depends on how you're managing auth)
    sessionStorage.removeItem('user'); // example, replace with your own method
    navigate('/login'); // Navigate to login page after logging out
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Sidebar</h3>
        <ul>
          <li>
            <Link to="/students" className="sidebar-link">Students Page</Link>
          </li>
          <li>
          <Link to="/LoginForm" className="sidebar-link">Logout</Link>
           
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to the Dashboard</h1>
        <p>Only logged-in users can see this page.</p>
      </div>
    </div>
  );
};

export default Dashboard;
