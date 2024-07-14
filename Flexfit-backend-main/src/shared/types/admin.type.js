// adminTypes.js

const { Request } = require("express");

/**
 * Represents the structure of admin form data.
 */
exports.AdminFormData = {
    username: String,
    password: String,
    role: {
        type: String,
        enum: ["admin", "superadmin"],
        default: "admin",
    },
};

/**
 * Request type for admin-related operations.
 */
exports.AdminRequestType = {
    ...Request,
    body: exports.AdminFormData,
};
