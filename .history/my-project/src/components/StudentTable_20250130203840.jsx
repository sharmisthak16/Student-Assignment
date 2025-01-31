import React, { useState } from "react";
import { Eye, Edit, Trash } from "lucide-react"; // You need to install lucide-react for icons
import "./StudentTable.css";

const StudentTable = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", class: "10", section: "A", rollNumber: "101" },
    { id: 2, name: "Jane Smith", class: "9", section: "B", rollNumber: "102" },
  ]);

  const addStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: "New Student",
      class: "-",
      section: "-",
      rollNumber: "-",
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="student-table-container">
      <link tp className="add-student-btn" onClick={addStudent}>
        Add Student
      </link>
      <table className="student-table">
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
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td>
                <Eye className="action-icon" />
                <Edit className="action-icon" />
                <Trash
                  className="action-icon"
                  onClick={() => deleteStudent(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
