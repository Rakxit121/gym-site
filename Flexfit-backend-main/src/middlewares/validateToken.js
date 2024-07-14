const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_KEY } = require("../../config");
const { User } = require("../models/User");

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, ACCESS_TOKEN_KEY, async (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }

            const user = await User.findById(decoded.user._id);

            if (!user || !user.isAdmin) {
                res.status(403);
                throw new Error("Unauthorized access");
            }

            req.user = decoded.user;
            next();
        });
    } else {
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }
});

module.exports = { validateToken };
