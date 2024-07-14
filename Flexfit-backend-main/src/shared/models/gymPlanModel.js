// gymPlanModel.js

const mongoose = require("mongoose");

const GymPlanSchema = new mongoose.Schema({
    benefits: [String],
    price: Number,
    img: String,
    type: String,
});

module.exports = mongoose.model("GymPlan", GymPlanSchema);
