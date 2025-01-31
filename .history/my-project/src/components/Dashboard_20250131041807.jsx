import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage or remove tokens (this depends on how you're managing auth)
    sessionStorage.removeItem('user'); // Example, replace with your own method
    navigate('/LoginForm'); // Navigate to login page after logging out
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3 className="sidebar-title">Sidebar</h3>
        <ul className="sidebar-list">
          <li>
            <Link to="/students" className="sidebar-link">Students Page</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
