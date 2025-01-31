import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButtons.css';

const HomeButtons = () => {
  return (
    <div className="btn-container">
      <Link to='/loginform' className="btn">Page 1</Link>
      <Link to='/loginform' className="btn">Page 1</Link>
    </div>
  );
};

export default HomeButtons;
