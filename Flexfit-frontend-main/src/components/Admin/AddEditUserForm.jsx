import React, { useEffect, useState } from 'react';

const AddEditUserForm = ({ formData, onSave, onClose }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        age: '',
        phoneNumber: '',
        gender: '',
        membership: ''
    });

    useEffect(() => {
        if (formData) {
            setUser(formData);
        }
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(user);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-2xl">
                <div className="flex justify-end mb-4">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl font-bold">✕</button>
                </div>
                <h2 className="text-2xl font-semibold mb-6">{formData ? 'Edit User' : 'Add New User'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff0336] focus:border-[#ff0336] sm:text-sm"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff0336] focus:border-[#ff0336] sm:text-sm"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={user.age}
                            onChange={handleChange}
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff0336] focus:border-[#ff0336] sm:text-sm"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleChange}
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff0336] focus:border-[#ff0336] sm:text-sm"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={user.gender}
                            onChange={handleChange}
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff0336] focus:border-[#ff0336] sm:text-sm"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="block text-sm font-medium text-gray-700">Membership</label>
                        <select
                            name="membership"
                            value={user.membership}
                            onChange={handleChange}
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff0336] focus:border-[#ff0336] sm:text-sm"
                            required
                        >
                            <option value="">Select Membership</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type="button" onClick={onClose} className="btn btn-secondary mr-4">Cancel</button>
                        <button type="submit" className="btn btn-primary bg-[#ff0336] text-white hover:bg-[#e00232]">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditUserForm;
