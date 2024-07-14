const express = require("express");
const { register, login, getCurrentUser, registerAClass } = require("../controllers");
const { validateToken } = require("../middlewares/validateToken");

const userRoute = express.Router();

userRoute.route("/signup").post(register);
userRoute.route("/login").post(login);
userRoute.route("/current").get(validateToken, getCurrentUser);

userRoute.route("/registerAClass").post(registerAClass);

module.exports = { userRoute };
