import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Membership = () => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Membership</h1>
                <p>Manage your gym memberships here.</p>
            </div>
        </div>
    );
};

export default Membership;
