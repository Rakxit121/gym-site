
import React, { useState } from 'react';
import AddEditMemberForm from '../../components/Admin/AddEditMemberForm'; // Import your form component here
import Sidebar from '../../components/Admin/Sidebar';

const AdminPayment = () => {
    const [showAddEditForm, setShowAddEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState(null); // State to hold data for editing

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    const handleNewMember = () => {
        // Show the add/edit form for new member
        setShowAddEditForm(true);
        setEditFormData(null); // Reset edit data
    };

    const handleEditMember = (data) => {
        // Show the add/edit form for editing member
        setShowAddEditForm(true);
        setEditFormData(data);
    };

    const handleDeleteMember = (data) => {
        // Implement delete logic here
        console.log(`Deleting member: ${data.firstName} ${data.lastName}`);
        // You can implement API calls or state updates to delete the member
    };
    
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <div className="container" style={{ marginTop: '10%' }}>
                    <div className="row">
                        <div className="col">
                            <h1>Payment</h1>
                            <div className="form-group flex" style={{ justifyContent: 'space-between' }}>
                                <input type="text" className="form-control" placeholder="Search user..." />
                                <button className="btn btn-success" onClick={handleNewMember}>+ New Member</button>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Example data for demonstration */}
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Salim</td>
                                        <td>Srew</td>
                                        <td>21</td>
                                        <td>+212 678-542310</td>
                                        <td>male</td>
                                        <td>Boxer</td>
                                        <td>
                                            <button className="btn btn-link" onClick={() => handleEditMember({ firstName: 'Salim', lastName: 'Srew', CIN: 'J098765', birthday: '28 June 2000', phoneNumber: '+212 678-542310', gender: 'male', status: 'Member' })}>edit</button>
                                            <button className="btn btn-link" onClick={() => handleDeleteMember({ firstName: 'Salim', lastName: 'Srew', CIN: 'J098765', birthday: '28 June 2000', phoneNumber: '+212 678-542310', gender: 'male', status: 'Member' })}>delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showAddEditForm && (
                <AddEditMemberForm
                    formData={editFormData}
                    onClose={() => setShowAddEditForm(false)}
                />
            )}
        </div>
    );
};

export default AdminPayment;
