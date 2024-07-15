import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';

const AdminPayment = () => {
    const [payments, setPayments] = useState([
        {
            id: 1,
            userId: 'U001',
            name: 'Salim Srew',
            amount: '$50',
            membership: 'Beginner'
        },
        {
            id: 2,
            userId: 'U002',
            name: 'John Doe',
            amount: '$75',
            membership: 'Intermediate'
        }
    ]);


    const handleLogout = () => {
        console.log('Logout clicked');
    };



    const handleDeleteMember = (id) => {
        setPayments(payments.filter(payment => payment.id !== id));
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

                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">UserID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Membership</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map(payment => (
                                        <tr key={payment.id}>
                                            <td><input type="checkbox" /></td>
                                            <td>{payment.userId}</td>
                                            <td>{payment.name}</td>
                                            <td>{payment.amount}</td>
                                            <td>{payment.membership}</td>
                                            <td>

                                                <button className="btn btn-link" onClick={() => handleDeleteMember(payment.id)}>delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminPayment;
