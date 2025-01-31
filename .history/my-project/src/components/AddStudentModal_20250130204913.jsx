// AddStudentModal.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import "./AddStudent"

const AddStudentModal = ({ isOpen, onRequestClose }) => {
  const [studentData, setStudentData] = useState({
    name: "",
    class: "",
    section: "",
    rollNumber: "",
    age: "",
    gender: "",
    address: "",
    phoneNumber: "",
    parentName: "",
    parentPhone: "",
    email: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (without Firestore integration)
    console.log("Form submitted with data: ", studentData);
    
    // Close the modal after submitting
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Student Modal"
      ariaHideApp={false}
    >
      <h2>Add Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Class</label>
          <input
            type="text"
            name="class"
            value={studentData.class}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Section</label>
          <input
            type="text"
            name="section"
            value={studentData.section}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={studentData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={studentData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            name="gender"
            value={studentData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={studentData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={studentData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Parent`s Name</label>
          <input
            type="text"
            name="parentName"
            value={studentData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Parent`s Phone</label>
          <input
            type="tel"
            name="parentPhone"
            value={studentData.parentPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Emergency Contact</label>
          <input
            type="tel"
            name="emergencyContact"
            value={studentData.emergencyContact}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddStudentModal;
