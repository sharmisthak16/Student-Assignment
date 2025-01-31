import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from './firebase'; // Assuming you're using Firestore
import './StudentPage.css';

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="students-page">
      <h1>Students List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Grade</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.address}</td>
                  <td>{student.grade}</td>
                  <td>{student.address}</td>
                  <td>{student.grade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No students available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentPage;
