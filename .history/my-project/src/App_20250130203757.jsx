import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard'; // Create this component for the dashboard page
import Home from './Pages/Home';
import StudentTable from './components/StudentTable';
import AddStudentModal from './Pages'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/LoginForm" element={<LoginForm />} /> {/* Use element instead of component */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Use element instead of component */}
       <Route path="/StudentTable" element={<StudentTable />}  />
       <Route path="/AddStudentModal" element={<AddStudentModal/>}
      </Routes>
    </Router>
  );
}

export default App;
