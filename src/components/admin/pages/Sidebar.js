import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white position-fixed"
      style={{
        top: 0,
        left: 0,
        height: "100vh",
        width: "220px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px"
      }}
    >
      <h4 className="text-warning">Admin Panel</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <NavLink to="/admin/show-users" className="nav-link text-white">
            Show Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/add-user" className="nav-link text-white">
            Add User
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
