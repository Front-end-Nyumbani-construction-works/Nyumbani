import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    user_type: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/admin/admin-users/${id}`)
      .then((res) => {
        const data = res.data.user;
        setFormData({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          contact: data.contact,
          user_type: data.user_type,
        });
      })
      .catch((err) => console.error("Error loading user:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/v1/admin/admin-users/${id}`, formData)
      .then(() => {
        alert("User updated successfully.");
        navigate("/admin/show-users");
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        alert("Failed to update user.");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" name="first_name" className="form-control" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" name="last_name" className="form-control" value={formData.last_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Contact</label>
          <input type="text" name="contact" className="form-control" value={formData.contact} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>User Type</label>
          <select name="user_type" className="form-control" value={formData.user_type} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
