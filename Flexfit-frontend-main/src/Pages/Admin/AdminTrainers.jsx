import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Sidebar from '../../components/Admin/Sidebar';
import AddEditMemberForm from '../../components/Admin/AddEditMemberForm';

const AdminTrainers = () => {
    const [trainers, setTrainers] = useState([
        {
            id: 1,
            firstName: 'Salim',
            lastName: 'Srew',
            CIN: 'J098765',
            birthday: '2000-06-28',
            phoneNumber: '+212 678-542310',
            gender: 'male',
            status: 'Member'
        }
    ]);
    const [showAddEditForm, setShowAddEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState(null);

    const handleLogout = () => {
        console.log('Logout clicked');
    };

    const handleNewMember = () => {
        setShowAddEditForm(true);
        setEditFormData(null);
    };

    const handleEditMember = (data) => {
        setShowAddEditForm(true);
        setEditFormData(data);
    };

    const handleSaveMember = (data) => {
        if (editFormData) {
            setTrainers(trainers.map(trainer => trainer.id === data.id ? data : trainer));
        } else {
            setTrainers([...trainers, { ...data, id: trainers.length + 1 }]);
        }
    };

    const handleDeleteMember = (id) => {
        setTrainers(trainers.filter(trainer => trainer.id !== id));
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
                <div className="container" style={{ marginTop: '10%' }}>
                    <div className="row">
                        <div className="col">
                            <h1>Trainers</h1>
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
                                        <th scope="col">CIN</th>
                                        <th scope="col">Birthday</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trainers.map(trainer => (
                                        <tr key={trainer.id}>
                                            <td><input type="checkbox" /></td>
                                            <td>{trainer.firstName}</td>
                                            <td>{trainer.lastName}</td>
                                            <td>{trainer.CIN}</td>
                                            <td>{new Date(trainer.birthday).toLocaleDateString()}</td>
                                            <td>{trainer.phoneNumber}</td>
                                            <td>{trainer.gender}</td>
                                            <td>{trainer.status}</td>
                                            <td>
                                                <button className="btn btn-link" onClick={() => handleEditMember(trainer)}>
                                                    <FaEdit />
                                                </button>
                                                <button className="btn btn-link" onClick={() => handleDeleteMember(trainer.id)}>
                                                    <FaTrashAlt />
                                                </button>
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
                <AddEditMemberForm
                    formData={editFormData}
                    onClose={() => setShowAddEditForm(false)}
                    onSave={handleSaveMember}
                />
            )}
        </div>
    );
};

export default AdminTrainers;
