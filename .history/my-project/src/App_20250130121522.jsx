import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard'; // Create this component for the dashboard page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Use element instead of component */}
        <Route path="/dashboard" element={<Dashboard />} />
         {/* Use element instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
