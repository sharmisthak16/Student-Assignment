// src/Dashboard.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ''

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage or remove tokens (this depends on how you're managing auth)
    sessionStorage.removeItem('user'); // example, replace with your own method
    navigate('/login'); // Navigate to login page after logging out
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
        <h3>Sidebar</h3>
        <ul>
          <li>
            <Link to="/students">Students Page</Link>
          </li>
          <li>
            <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div style={{ marginLeft: '20px', padding: '20px', flex: 1 }}>
        <h1>Welcome to the Dashboard</h1>
        <p>Only logged-in users can see this page.</p>
      </div>
    </div>
  );
};

export default Dashboard;
