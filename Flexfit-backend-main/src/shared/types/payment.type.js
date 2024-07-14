// paymentTypes.js

const { Request } = require("express");

/**
 * Represents the structure of payment data.
 */
exports.PaymentType = {
    amount: Number,
    description: String,
    status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending",
    },
};

/**
 * Request type for payment-related operations.
 */
exports.PaymentRequestType = {
    ...Request,
    body: exports.PaymentType,
};
