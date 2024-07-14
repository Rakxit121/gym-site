const { Request } = require("express");

/**
 * Represents the structure of a class.
 */
const ClassType = {
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
const ClassRequestType = {
    ...Request,
    body: ClassType,
};

module.exports = { ClassType, ClassRequestType };
