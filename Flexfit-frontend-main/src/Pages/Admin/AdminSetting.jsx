import React, { useState } from 'react';
import './AdminSetting.css'; // Add styling in this CSS file
import Sidebar from './Sidebar';

const AdminSettings = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    const handlePasswordChange = () => {
        if (newPassword !== confirmNewPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Implement password update logic here using axios or any other method
        console.log('Password updated');
    };

    return (
        <div className="admin-settings">
            <Sidebar onLogout={handleLogout} />
            <div className="settings-content">
                <h1>Settings</h1>
                <h2>Update Password</h2>
                <div className="password-update-form">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                    />
                    <button onClick={handlePasswordChange}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
