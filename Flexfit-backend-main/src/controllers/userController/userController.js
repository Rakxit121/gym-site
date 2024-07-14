const express = require("express");
const asyncHandler = require("express-async-handler");
const { errors, User } = require("../../shared");

// @desc  register a class
// @route   POST /classes/register
// @access public
const registerAClass = asyncHandler(async (req, res) => {
    const { classId, email } = req.body;

    if (!email || !classId) {
        res.status(errors.VALIDATION_ERROR);
        throw new Error("Email or class ID not valid");
    }

    await User.findOneAndUpdate(
        { email: email },
        { $push: { registedClassess: classId } },
        { new: true }
    )
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(errors.SERVER_ERROR);
            throw new Error("Internal Server Error");
        });
});

module.exports = { registerAClass };
