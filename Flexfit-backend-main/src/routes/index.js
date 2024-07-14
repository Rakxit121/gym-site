const express = require("express");
const { userRoute } = require("./userRoute");
const { galleryRoute } = require("./galleryRoute");
const { classesRoute } = require("./classesRoute");
const { gymPlanRoute } = require("./gymPlanRoute");
const { paymentRoute } = require("./paymentRoute");
const { adminRoute } = require("./AdminRoute");

const routes = express.Router();

routes.use(userRoute);
routes.use(galleryRoute);
routes.use(classesRoute);
routes.use(gymPlanRoute);
routes.use(paymentRoute);
routes.use(adminRoute);

module.exports = { routes };
