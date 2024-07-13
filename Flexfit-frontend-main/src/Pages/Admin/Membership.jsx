import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Membership = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Membership</h1>
                <p>Manage your gym memberships here.</p>
            </div>
        </div>
    );
};

export default Membership;
