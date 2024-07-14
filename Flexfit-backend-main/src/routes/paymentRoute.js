const express = require("express");
const asyncHandler = require("express-async-handler");
const { processPayment } = require("../controllers/paymentController");

const paymentRoute = express.Router();

// @desc  Process payment
// @route POST /api/payment
// @access public
paymentRoute.route("/payment").post(asyncHandler(processPayment));

module.exports = { paymentRoute };
