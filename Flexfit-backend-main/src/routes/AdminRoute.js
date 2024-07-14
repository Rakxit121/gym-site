const express = require("express");
const { getAllClasses, createClass, updateClass } = require("../controllers/adminController");
const { authenticateAdmin } = require("../middlewares/authMiddleware");

const adminRoute = express.Router();

// Middleware to authenticate admin
adminRoute.use(authenticateAdmin);

// @desc  Get all classes
// @route GET /admin/classes
// @access admin
adminRoute.route("/classes").get(getAllClasses);

// @desc  Create a new class
// @route POST /admin/classes/create
// @access admin
adminRoute.route("/classes/create").post(createClass);

// @desc  Update a class
// @route PUT /admin/classes/:id/update
// @access admin
adminRoute.route("/classes/:id/update").put(updateClass);

module.exports = { adminRoute };
