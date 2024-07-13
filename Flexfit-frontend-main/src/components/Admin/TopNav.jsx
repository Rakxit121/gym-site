// import adminLogo from 'path_to_admin_logo'; // Ensure the correct path to your admin logo
// import nepalLogo from 'path_to_nepal_logo'; // Ensure the correct path to your logo
import React, { useState } from 'react';
import './Sidebar'; // Add styling in this CSS file

const TopNav = ({ onLogout, onThemeChange }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="topnav">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="icons">
                <img src={'https://img.icons8.com/?size=100&id=60249&format=png&color=000000'} alt="Nepal Logo" className="logo" />
                <div className="admin-container" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <img src={'https://img.icons8.com/?size=100&id=23441&format=png&color=000000'} alt="Admin Logo" className="admin-logo" />
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <button onClick={onThemeChange}>Theme</button>
                            <button onClick={onLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopNav;
