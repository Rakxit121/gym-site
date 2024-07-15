import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from "../../images/logo/logo-footer.svg";
import './Sidebar.css'; // Add styling in this CSS file
const Sidebar = ({ onLogout }) => {
    
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const onThemeChange = () => {
        // Implement theme change logic here
        console.log('Theme changed');
    };

        
    
    return (
        <div style={{display: 'flex', flexDirection:'row'}}>
            <div className="sidebar flex flex-col fixed w-[30rem] min450:w-full h-[100vh] bg-white top-0 left-0 z-[9999999999] p-[45px]  overflow-x-hidden">
            <img src={FooterLogo} alt="logo" className="w-[15rem] ff_logo" />
                <div className="profile" >
                <Link to="/admin/settings"> <img src="https://cdn-icons-png.flaticon.com/512/16876/16876123.png" alt="admin" /></Link>
                    <p>admin</p>
                    <p>admin@gmail.com</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/admin/dashboard"><p className='side_link'><img width="38" height="38" src="https://img.icons8.com/deco/48/dashboard.png" alt="dashboard"/>  Dashboard</p></Link></li>
                        <li><Link to="/admin/membership"><p className='side_link'><img width="38" height="38" src="https://img.icons8.com/parakeet/48/group.png" alt="users"/>  Users</p></Link></li>
                        <li><Link to="/admin/trainers"><p className='side_link'><img width="38" height="38" src="https://img.icons8.com/external-flat-juicy-fish/60/external-gym-gym-life-flat-flat-juicy-fish-10.png" alt="trainers"/>  Trainers</p></Link></li>
                        <li><Link to="/admin/payment"><p className='side_link'><img width="38" height="38" src="https://img.icons8.com/cotton/64/card-in-use--v1.png" alt="payment"/>  Payment</p></Link></li>
                        <li><Link to="/admin/settings"><p className='side_link'><img width="38" height="38" src="https://img.icons8.com/plumpy/24/settings--v1.png" alt="setting"/>  Settings</p></Link></li>
                    </ul>
                </nav>
                <button onClick={onLogout} className="logout-button">Logout</button>
            </div>
           

            <div className="topnav flex  fixed min450:w-full overflow-x-hidden">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="icons">
                <img src={'https://img.icons8.com/?size=100&id=60249&format=png&color=000000'} alt="Nepal Logo" className="logo" />
                <div className="admin-container" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <img src={'https://img.icons8.com/?size=100&id=7819&format=png&color=000000'} alt="Admin Logo" className="admin-logo" />
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <button onClick={onThemeChange}>Theme</button>
                            <button onClick={onLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
            {/* <TopNav onLogout={handleLogout} /> */}
        </div>
        
    );
};

export default Sidebar;
