const express = require("express");
const asyncHandler = require("express-async-handler");
const { GymPlan, errors, plans } = require("../../shared");

// @desc  get plans
// @route   GET /plans
// @access public
const getGymPlans = asyncHandler(async (req, res) => {
    const plans = await GymPlan.find();

    res.status(200).json(plans);
});

// @desc  get plans
// @route   POST /plans/create
// @access public
const createPlans = asyncHandler(async (req, res) => {
    plans.forEach(async (plan, index) => {
        const newPlan = await GymPlan.create(plan);

        if (!newPlan) {
            res.status(errors.SERVER_ERROR);
            throw new Error("Internal Server Error");
        }
    });

    res.status(200).json(plans);
});

module.exports = { getGymPlans, createPlans };
