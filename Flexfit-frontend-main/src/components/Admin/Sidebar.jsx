import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add styling in this CSS file

const Sidebar = ({ onLogout }) => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src="path_to_profile_image" alt="admin" />
                <p>admin</p>
                <p>admin@gmail.com</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/members">Members</Link></li>
                    <li><Link to="/admin/trainers">Trainers</Link></li>
                    <li><Link to="/admin/calendar">Calendar</Link></li>
                    <li><Link to="/admin/sport-type">Sport Type</Link></li>
                    <li><Link to="/admin/payment">Payment</Link></li>
                    <li><Link to="/admin/settings">Settings</Link></li>
                </ul>
            </nav>
            <button onClick={onLogout} className="logout-button">Logout</button>
        </div>
    );
};

export default Sidebar;
