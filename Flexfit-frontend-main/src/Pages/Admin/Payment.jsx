import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Payment = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Payment</h1>
                <p>Manage payment methods and billing details here.</p>
            </div>
        </div>
    );
};

export default Payment;
