import React, { useState, useEffect } from 'react';

const AddEditMemberForm = ({ formData, onClose, onSave }) => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        Sport: '',
        birthday: '',
        phoneNumber: '',
        gender: 'male',
        status: 'Member'
    });

    useEffect(() => {
        if (formData) {
            setFormState(formData);
        }
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{formData ? 'Edit Member' : 'Add New Member'}</h2>
                    <button onClick={onClose} className="text-black text-2xl">✕</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {['firstName', 'lastName', 'Sport', 'birthday', 'phoneNumber'].map((field) => (
                            <div className="form-group" key={field}>
                                <label htmlFor={field} className="block mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                                <input
                                    type="text"
                                    id={field}
                                    name={field}
                                    value={formState[field]}
                                    onChange={handleChange}
                                    className="form-control w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                        ))}
                        <div className="form-group">
                            <label htmlFor="gender" className="block mb-1">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formState.gender}
                                onChange={handleChange}
                                className="form-control w-full px-4 py-2 border rounded-lg"
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status" className="block mb-1">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formState.status}
                                onChange={handleChange}
                                className="form-control w-full px-4 py-2 border rounded-lg"
                                required
                            >
                                <option value="Member">Member</option>
                                <option value="Trainer">Trainer</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="btn btn-secondary mr-2" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary">{formData ? 'Update' : 'Submit'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditMemberForm;
