// userTypes.js

const { Request } = require("express");

/**
 * Represents the structure of authentication form data.
 */
exports.AuthenticationFormData = {
    email: String,
    password: String,
};

/**
 * Represents the structure of user form data, including authentication data.
 */
exports.UserFormData = {
    username: String,
    registedClassess: [String],
    ...exports.AuthenticationFormData,
};

/**
 * Request type for authentication-related operations.
 */
exports.AuthenticationTypeRequest = {
    ...Request,
    body: exports.UserFormData,
    user: exports.AuthenticationFormData,
};
