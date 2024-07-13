import React from 'react';
import Sidebar from '../../components/Admin/Sidebar.jsx';
// import './AdminPage.css'; // Add styling in this CSS file
import TopNav from '../../components/Admin/TopNav.jsx';

const AdminPage = () => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <div className="admin-page" style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />

            <div className="right-content">
                
                <div className="admin-content">
                    {/* <Routes>
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/members" element={<AdminMembership />} />
                        <Route path="/admin/trainers" element={<AdminTrainers />} />
                        <Route path="/admin/payment" element={<AdminPayment />} />
                        <Route path="/admin/settings" element={<AdminSettings />} />
                    </Routes> */}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
