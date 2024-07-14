const express = require("express");
const { createPlans, getGymPlans } = require("../controllers");

const gymPlanRoute = express.Router();

gymPlanRoute.route("/plans").get(getGymPlans);
gymPlanRoute.route("/plans/create").post(createPlans);

module.exports = { gymPlanRoute };
