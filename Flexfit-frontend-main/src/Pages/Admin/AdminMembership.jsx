import React, { useState } from 'react';
import AddEditUserForm from '../../components/Admin/AddEditUserForm'; // Import your form component here
import Sidebar from '../../components/Admin/Sidebar';

const AdminMembership = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: 'Salim',
            lastName: 'Srew',
            age: 21,
            phoneNumber: '+212 678-542310',
            gender: 'male',
            membership: 'Intermediate',
            status: 'User'
        },
        {
            id: 1,
            firstName: 'Admin',
            lastName: 'main',
            age: 21,
            phoneNumber: '988277727',
            gender: 'male',
            membership: 'Advanced',
            status: 'Admin'
        }
    ]);
    const [showAddEditForm, setShowAddEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState(null);

    const handleLogout = () => {
        console.log('Logout clicked');
    };

    const handleNewUser = () => {
        setShowAddEditForm(true);
        setEditFormData(null);
    };

    const handleEditUser = (user) => {
        setShowAddEditForm(true);
        setEditFormData(user);
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleSaveUser = (user) => {
        if (editFormData) {
            setUsers(users.map(u => (u.id === user.id ? user : u)));
        } else {
            setUsers([...users, { ...user, id: users.length + 1 }]);
        }
        setShowAddEditForm(false);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <div className="container" style={{ marginTop: '10%' }}>
                    <div className="row">
                        <div className="col">
                            <h1>Users</h1>
                            <div className="form-group flex" style={{ justifyContent: 'space-between' }}>
                                <input type="text" className="form-control" placeholder="Search user..." />
                                <button className="btn btn-success" onClick={handleNewUser}>+ New User</button>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Membership</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.age}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.membership}</td>
                                             <td>{user.status}</td>
                                            <td>
                                                <button className="btn btn-link" onClick={() => handleEditUser(user)}>edit</button>
                                                <button className="btn btn-link" onClick={() => handleDeleteUser(user.id)}>delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showAddEditForm && (
                <AddEditUserForm
                    formData={editFormData}
                    onSave={handleSaveUser}
                    onClose={() => setShowAddEditForm(false)}
                />
            )}
        </div>
    );
};

export default AdminMembership;
