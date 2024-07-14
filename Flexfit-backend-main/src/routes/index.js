const express = require("express");
const { userRoute } = require("./userRoute");
const { galleryRoute } = require("./galleryRoute");
const { classesRoute } = require("./classesRoute");
const { gymPlanRoute } = require("./gymPlanRoute");

const routes = express.Router();

routes.use(userRoute);
routes.use(galleryRoute);
routes.use(classesRoute);
routes.use(gymPlanRoute);

module.exports = { routes };
