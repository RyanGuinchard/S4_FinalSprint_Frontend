import {  Routes, Route } from 'react-router-dom';
import AdminDashBoard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  )
}

export default AdminRoutes