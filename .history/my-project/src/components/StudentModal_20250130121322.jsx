import React, { useState } from 'react';
import { db } from './firebase'; // Firebase setup
import { collection, addDoc } from 'firebase/firestore';
import './StudentModal.css'

const StudentModal = ({ setShowModal }) => {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    class: '',
    section: '',
    rollNumber: '',
    // Add 8 more fields for the form
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const studentRef = collection(db, 'students');
      await addDoc(studentRef, studentInfo);
      setShowModal(false); // Close modal on successful submission
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={studentInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="class"
          placeholder="Class"
          value={studentInfo.class}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="section"
          placeholder="Section"
          value={studentInfo.section}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={studentInfo.rollNumber}
          onChange={handleInputChange}
        />
        {/* Add the other fields here */}
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  );
};

export default StudentModal;
