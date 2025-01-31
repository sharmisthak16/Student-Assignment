import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButtons.css';

const HomeButtons = () => {
  return (
    <div className="btn-container">
      <Link to='/loginform' className="btn">Page 1</Link>
      <button className="btn">Page 2</button>
    </div>
  );
};

export default HomeButtons;
