// userModel.js

const mongoose = require("mongoose");
const { UserFormData } = require("../types");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    registeredClasses: [String],
});

module.exports = mongoose.model("User", UserSchema);
