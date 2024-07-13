import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Dashboard</h1>
                <p>Welcome to the admin dashboard.</p>
            </div>
        </div>
    );
};

export default Dashboard;
