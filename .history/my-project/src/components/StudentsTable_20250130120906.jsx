import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Import Firebase configuration
import { collection, getDocs, addDoc } from 'firebase/firestore';
import Modal from './Modal'; // Modal Component
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'; // For icons

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch students from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      const studentCollection = collection(db, 'students');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList);
    };

    fetchStudents();
  }, []);

  // Handle Add Student Modal
  const handleAddStudent = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleAddStudent}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td>
                <FaEye />
                <FaEdit />
                <FaTrashAlt />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default StudentsTable;
