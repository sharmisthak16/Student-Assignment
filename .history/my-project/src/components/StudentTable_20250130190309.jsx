import React, { useState } from 'react';
import { Eye, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StudentTable = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', class: '10', section: 'A', rollNumber: '101' },
    { id: 2, name: 'Jane Smith', class: '9', section: 'B', rollNumber: '102' },
  ]);

  const addStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: 'New Student',
      class: '-',
      section: '-',
      rollNumber: '-',
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="p-6">
      <Button className="mb-4" onClick={addStudent}>
        Add Student
      </Button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Class</th>
            <th className="border p-2">Section</th>
            <th className="border p-2">Roll Number</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center border">
              <td className="border p-2">{student.id}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.class}</td>
              <td className="border p-2">{student.section}</td>
              <td className="border p-2">{student.rollNumber}</td>
              <td className="border p-2 flex justify-center gap-3">
                <Eye className="text-blue-500 cursor-pointer" />
                <Edit className="text-yellow-500 cursor-pointer" />
                <Trash
                  className="text-red-500 cursor-pointer"
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

function Home() {
  return (
    <div>
      <StudentTable />
    </div>
  );
}

export default Home;