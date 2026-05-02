export const errorMiddleware = (
  err: any,
  _req: any,
  res: any,
  _next: any
) => {
  const statusCode = err.statusCode || 400;

  res.status(statusCode).json({
    message: err.message || "Something went wrong",
  });
};
