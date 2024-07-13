import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './AdminPage.css'; // Add styling in this CSS file
import AdminSettings from './AdminSettings';
// import Calendar from './Calendar';
import Dashboard from './Dashboard';
import Members from './Members';
import Payment from './Payment';
import Sidebar from './Sidebar';
// import SportType from './SportType';
import Trainers from './Trainers';

const AdminPage = () => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <div className="admin-page">
            <Sidebar onLogout={handleLogout} />
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Route path="/admin/members" component={Members} />
                    <Route path="/admin/trainers" component={Trainers} />
                    <Route path="/admin/payment" component={Payment} />
                    <Route path="/admin/settings" component={AdminSettings} />
                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
            </div>
        </div>
    );
};

export default AdminPage;
