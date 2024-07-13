import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Trainers = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Trainers</h1>
                <p>Manage gym trainers here.</p>
            </div>
        </div>
    );
};

export default Trainers;
