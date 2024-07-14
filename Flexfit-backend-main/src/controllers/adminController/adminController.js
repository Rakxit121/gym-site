const asyncHandler = require("express-async-handler");
const { Class } = require("../models/Class");
const { Payment } = require("../models/Payment");
const { User } = require("../models/User");

// Classes CRUD operations
// Get all classes
const getAllClasses = asyncHandler(async (req, res) => {
    const classes = await Class.find();
    res.status(200).json(classes);
});

// Create a new class
const createClass = asyncHandler(async (req, res) => {
    const { name, trainer, level, schedule, startDate, endDate, img } = req.body;
    const newClass = await Class.create({
        name,
        trainer,
        level,
        schedule,
        startDate,
        endDate,
        img,
    });
    res.status(201).json(newClass);
});

// Update class by ID
const updateClass = asyncHandler(async (req, res) => {
    const classId = req.params.id;
    const { name, trainer, level, schedule, startDate, endDate, img } = req.body;
    const updatedClass = await Class.findByIdAndUpdate(
        classId,
        { name, trainer, level, schedule, startDate, endDate, img },
        { new: true }
    );
    if (!updatedClass) {
        res.status(404);
        throw new Error("Class not found");
    }
    res.status(200).json(updatedClass);
});

// Delete class by ID
const deleteClass = asyncHandler(async (req, res) => {
    const classId = req.params.id;
    const deletedClass = await Class.findByIdAndDelete(classId);
    if (!deletedClass) {
        res.status(404);
        throw new Error("Class not found");
    }
    res.status(200).json({ message: "Class deleted successfully" });
});

// Payments CRUD operations
// Get all payments
const getAllPayments = asyncHandler(async (req, res) => {
    const payments = await Payment.find();
    res.status(200).json(payments);
});

// Create a new payment
const createPayment = asyncHandler(async (req, res) => {
    const { amount, userId, classId } = req.body;
    const newPayment = await Payment.create({ amount, userId, classId });
    res.status(201).json(newPayment);
});

// Update payment by ID
const updatePayment = asyncHandler(async (req, res) => {
    const paymentId = req.params.id;
    const { amount, userId, classId } = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(
        paymentId,
        { amount, userId, classId },
        { new: true }
    );
    if (!updatedPayment) {
        res.status(404);
        throw new Error("Payment not found");
    }
    res.status(200).json(updatedPayment);
});

// Delete payment by ID
const deletePayment = asyncHandler(async (req, res) => {
    const paymentId = req.params.id;
    const deletedPayment = await Payment.findByIdAndDelete(paymentId);
    if (!deletedPayment) {
        res.status(404);
        throw new Error("Payment not found");
    }
    res.status(200).json({ message: "Payment deleted successfully" });
});

// Users CRUD operations
// Get all users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// Create a new user
const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
});

// Update user by ID
const updateUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { username, email, password },
        { new: true }
    );
    if (!updatedUser) {
        res.status(404);
        throw new Error("User not found");
    }
    res.status(200).json(updatedUser);
});

// Delete user by ID
const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
        res.status(404);
        throw new Error("User not found");
    }
    res.status(200).json({ message: "User deleted successfully" });
});

module.exports = {
    // Classes
    getAllClasses,
    createClass,
    updateClass,
    deleteClass,
    // Payments
    getAllPayments,
    createPayment,
    updatePayment,
    deletePayment,
    // Users
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
};
