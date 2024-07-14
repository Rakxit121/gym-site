const { Response, Request, NextFunction } = require("express");
const { errors } = require("../shared");

const errorHandler = (
    err,
    req,
    res,
    next
) => {
    const statusCode = res.statusCode || 500;
    switch (statusCode) {
        case errors.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: "Validation Failed",
                message: err.message,
            });
            break;

        case errors.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
            });
            break;

        case errors.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized",
                message: err.message,
            });
            break;

        case errors.FORBIDDEN:
            res.status(statusCode).json({
                title: "Forbidden",
                message: err.message,
            });
            break;

        case errors.SERVER_ERROR:
            res.status(statusCode).json({
                title: "Server Error",
                message: err.message,
            });
            break;

        default:
            next(err);
            break;
    }
};

module.exports = { errorHandler };
