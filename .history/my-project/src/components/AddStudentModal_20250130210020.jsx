import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    dob: '',
    parentName: '',
    parentPhone: '',
    guardian: '',
    hobbies: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Grade:
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Parent Name:
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Parent's Phone:
        <input
          type="text"
          name="parentPhone"
          value={formData.parentPhone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Guardian:
        <input
          type="text"
          name="guardian"
          value={formData.guardian}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Hobbies:
        <textarea
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudentModal;
