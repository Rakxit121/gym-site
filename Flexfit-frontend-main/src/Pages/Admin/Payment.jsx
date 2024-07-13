import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Payment = () => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };
    
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Payment</h1>
                <p>Manage payment methods and billing details here.</p>
            </div>
        </div>
    );
};

export default Payment;
