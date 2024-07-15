import React from 'react';
import Sidebar from '../../components/Admin/Sidebar.jsx';
// import './AdminPage.css'; // Add styling in this CSS file

const AdminPage = () => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <div className="admin-page" style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />


        </div>
    );
};

export default AdminPage;
