import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import './AdminSetting.css'; // Custom styling if necessary

const AdminSettings = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    const handlePasswordChange = () => {
        if (newPassword !== confirmNewPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Mock password update logic
        setTimeout(() => {
            setPasswordChanged(true);
            console.log('Password updated');
        }, 1000);
    };

    return (
        <div className="d-flex">
            <Sidebar onLogout={handleLogout} />
            <div className="container d-flex flex-column justify-content-center align-items-center vh-100" >
            <h1 className="text-center mb-4  d-flex ">Settings</h1>
                <div className="card p-4 shadow-sm w-100" style={{ maxWidth: '500px' }}>
                    {/* <h1 className="text-center mb-4">Settings</h1> */}
                    <form onSubmit={(e) => { e.preventDefault(); handlePasswordChange(); }}>
                        <div className="mb-3">
                            <label htmlFor="currentPassword" className="form-label">Current Password</label>
                            <input
                                type="password"
                                id="currentPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="form-control"
                                width={"100px"}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Save Changes</button>
                    </form>
                    {passwordChanged && (
                        <div className="alert alert-success mt-3" role="alert">
                            Password successfully updated!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
