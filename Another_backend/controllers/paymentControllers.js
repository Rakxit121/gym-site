// controllers/paymentController.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/paymentModel');

exports.createPaymentIntent = async (req, res) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd'
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.savePayment = async (req, res) => {
    const { userId, amount, Membership, status } = req.body;
    try {
        const newPayment = new Payment({ userId, amount, Membership, status });
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
