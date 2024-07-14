const asyncHandler = require("express-async-handler");
const { PaymentService } = require("../services/paymentService");

// Handle payment processing
const processPayment = asyncHandler(async (req, res) => {
    const { userId, amount, classId } = req.body;

    // Implement payment gateway integration here

    // Example: Update user's registered classes or gym plan after successful payment
    await PaymentService.processPayment(userId, amount, classId);

    res.status(200).json({ message: "Payment processed successfully" });
});

module.exports = { processPayment };
