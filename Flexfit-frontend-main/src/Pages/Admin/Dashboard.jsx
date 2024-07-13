import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Dashboard</h1>
                <p>Welcome to the admin dashboard.</p>
            </div>
        </div>
    );
};

export default Dashboard;
