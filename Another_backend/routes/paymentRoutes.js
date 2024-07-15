// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentControllers');

router.post('/create-payment-intent', paymentController.createPaymentIntent);
router.post('/', paymentController.savePayment);

module.exports = router;
