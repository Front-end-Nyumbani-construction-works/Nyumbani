import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
