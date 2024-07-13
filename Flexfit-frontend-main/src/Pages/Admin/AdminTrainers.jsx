import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';

const AdminTrainers = () => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Trainers</h1>
                <p>Manage gym trainers here.</p>
            </div>
        </div>
    );
};

export default AdminTrainers;
