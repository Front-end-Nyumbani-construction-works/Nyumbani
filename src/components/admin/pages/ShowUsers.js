import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/admin/admin-users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:5000/api/v1/admin/admin-users/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
          alert("User deleted successfully.");
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
          alert("Failed to delete user.");
        });
    }
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="shadow p-4 bg-white rounded">
        <h2 className="mb-4" style={{ fontWeight: '600', color: '#333' }}>All Users</h2>
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={u.id}>
                  <td>{index + 1}</td>
                  <td>{u.first_name} {u.last_name}</td>
                  <td>{u.email}</td>
                  <td className="text-capitalize">{u.user_type}</td>
                  <td>
                    <Link
                      to={`/admin/edit-user/${u.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(u.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowUsers;
