import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../../components/Admin/TopNav.jsx';
import './Sidebar.css'; // Add styling in this CSS file

const Sidebar = ({ onLogout }) => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };
    return (
        <div style={{display: 'flex'}}><div className="sidebar">
            <div className="profile">
                <img src="path_to_profile_image" alt="admin" />
                <p>admin</p>
                <p>admin@gmail.com</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/membership">Members</Link></li>
                    <li><Link to="/admin/trainers">Trainers</Link></li>
                    <li><Link to="/admin/payment">Payment</Link></li>
                    <li><Link to="/admin/settings">Settings</Link></li>
                </ul>
            </nav>
            <button onClick={onLogout} className="logout-button">Logout</button>
        </div><TopNav onLogout={handleLogout} /></div>
        
    );
};

export default Sidebar;
