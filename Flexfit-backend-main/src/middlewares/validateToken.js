const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_KEY } = require("../../config");

const validateToken = asyncHandler(async (req, res, next) => {
    // Get token from authHeader
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        const token = authHeader.split(" ")[1];

        // Decode the token
        jwt.verify(token, ACCESS_TOKEN_KEY, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
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
