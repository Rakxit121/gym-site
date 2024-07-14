// classTypes.js

const { Request } = require("express");

/**
 * Represents the structure of a class.
 */
exports.ClassType = {
    name: String,
    trainer: String,
    level: String,
    schedule: [String] || [Date],
    startDate: String || Date,
    endDate: String || Date,
    img: String,
};

/**
 * Request type for class-related operations.
 */
exports.ClassRequestType = {
    ...Request,
    body: exports.ClassType,
};
