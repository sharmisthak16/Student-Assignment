import React, { useState } from "react";
import Modal from "react-modal";

const AddStudentModal = ({ onRequestClose }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Show modal
  const openModal = () => setIsModalVisible(true);

  // Close modal
  const closeModal = () => {
    setIsModalVisible(false);
    onRequestClose();  // If you need to call onRequestClose from parent
  };

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
    console.log("Form submitted with data: ", studentData);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add Student</button>

      <Modal
        isOpen={isModalVisible}
        onRequestClose={closeModal}
        contentLabel="Add Student Modal"
        ariaHideApp={false}
      >
        <h2>Add Student Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
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
          {/* Repeat similar for other fields */}
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddStudentModal;
