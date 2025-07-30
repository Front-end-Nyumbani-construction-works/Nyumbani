import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddUser = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', form);
      setMessage('User added successfully!');
      setForm({ name: '', email: '' });
    } catch (err) {
      setMessage('Error adding user');
    }
  };

  return (
    <div>
      <h4>Add User</h4>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="primary">Add User</Button>
      </Form>
    </div>
  );
};

export default AddUser;
