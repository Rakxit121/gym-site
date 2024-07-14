const express = require("express");
const { createClass, getClasses, getClassInfo } = require("../controllers");

const classesRoute = express.Router();

classesRoute.route("/classes").get(getClasses);
classesRoute.route("/class/create").post(createClass);
classesRoute.route("/classes/:id").get(getClassInfo);

module.exports = { classesRoute };
