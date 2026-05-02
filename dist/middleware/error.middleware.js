export const errorMiddleware = (err, _req, res, _next) => {
    const statusCode = err.statusCode || 400;
    res.status(statusCode).json({
        message: err.message || "Something went wrong",
    });
};
//# sourceMappingURL=error.middleware.js.map