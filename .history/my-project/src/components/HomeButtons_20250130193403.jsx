import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeButtons.css';

const HomeButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="btn-container">
      <button className="btn" onClick={() => navigate('/')}>Page 1</button>
      <button className="btn">Page 2</button>
    </div>
  );
};

export default HomeButtons;
