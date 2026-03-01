const AppError = require('../utils/AppError');

/**
 * 404 Not Found middleware
 * Handles requests to undefined routes
 */
const notFound = (req, res, next) => {
  const message = `Cannot ${req.method} ${req.originalUrl}`;
  next(new AppError(message, 404));
};

module.exports = notFound;
