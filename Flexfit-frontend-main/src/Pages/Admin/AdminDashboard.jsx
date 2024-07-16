import React from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../../components/Admin/Sidebar';

const AdminDashboard = () => {

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    // Sample data for demonstration
    const data = {
        labels: ['U001', 'U002'],
        datasets: [
            {
                label: 'Amount',
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                borderWidth: 1,
                hoverBackgroundColor: '#1a237e',
                hoverBorderColor: '#1a237e',
                data: [50, 75],
            },
        ],
    };

    // Chart options
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <h1>Dashboard</h1>
                <p>Welcome to the admin dashboard.</p>

                {/* Chart */}
                <div style={{ marginTop: '20px' }}>
                    <h2>User Payments</h2>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
