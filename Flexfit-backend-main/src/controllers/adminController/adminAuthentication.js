const asyncHandler = require("express-async-handler");
const { Admin } = require("../models/Admin");

const authenticateAdmin = asyncHandler(async (req, res, next) => {
    // Implement admin authentication logic (e.g., check if admin token is valid)
    const isAdmin = req.headers.authorization === "Bearer ADMIN_TOKEN";

    if (isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
});

module.exports = { authenticateAdmin };
