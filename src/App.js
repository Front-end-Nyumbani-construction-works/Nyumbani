import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Homepage from './components/pages/homepage';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Project from './components/pages/project';
import Services from './components/pages/services';
import BookService from './components/pages/BookService';
import MyBookings from './components/pages/MyBookings';

import AdminDashboard from './components/admin/pages/AdminDashboard';
import AddUser from './components/admin/pages/AddUsers';
import ShowUsers from './components/admin/pages/ShowUsers';
import EditUser from './components/admin/pages/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main site layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book/:id" element={<BookService />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="show-users" element={<ShowUsers />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
