const { errors } = require("../shared");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    switch (statusCode) {
        case errors.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
            });
            break;

        case errors.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
            });
            break;

        case errors.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
            });
            break;

        case errors.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
            });
            break;

        case errors.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
            });
            break;

        default:
            next();
            break;
    }
};

module.exports = { errorHandler };
