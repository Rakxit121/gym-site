const express = require("express");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { User, errors } = require("../../shared");
const { ACCESS_TOKEN_KEY } = require("../../../config");

// @desc  register
// @route POST api/signup
// @access public
const register = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    // Check if username exists in the database
    const existingUser = await User.findOne({ email });

    // If yes, throw an error
    if (existingUser) {
        res.status(400);
        throw new Error("Email's already been used!");
    }
    // If not, create a new user (with hashed password)
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword, username });

    if (!newUser) {
        res.status(400);
        throw new Error("User Data is not valid");
    }

    res.status(201).json({ id: newUser.id, email, username });
});

// @desc  login
// @route POST api/login
// @access public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if email exists in the database
    const user = await User.findOne({ email });

    // If yes, compare provided password to hashedPassword
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ user: { email, password } }, ACCESS_TOKEN_KEY);

        res.status(200).json({ token });
    } else {
        res.status(errors.VALIDATION_ERROR);
        throw new Error("Email or password is not correct");
    }

    // If no, throw an error
    res.status(errors.NOT_FOUND);
    throw new Error("Email is not found");
});

// @desc  get current user
// @route GET /current
// @access private
const getCurrentUser = asyncHandler(async (req, res) => {
    // Find userInfo by email
    const { email } = req.user;

    const user = await User.findOne({ email });

    // Send user's info
    res.status(200).json({
        email: user.email,
        registeredClasses: user.registeredClasses || [],
        username: user.username,
    });
});

module.exports = { register, login, getCurrentUser };
