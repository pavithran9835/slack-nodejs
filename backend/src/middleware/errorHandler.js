const logger = require('../utils/logger');
const config = require('../config');

/**
 * Global error handling middleware
 * Catches all errors and sends appropriate response
 */
const errorHandler = (err, req, res, _next) => {
  const { message } = err;
  let { statusCode } = err;

  // Default to 500 if no status code is set
  statusCode = statusCode || 500;

  // Log error
  logger.error(
    `${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`,
    {
      error: err,
      stack: err.stack,
    }
  );

  // Send error response
  const response = {
    success: false,
    message,
    ...(config.nodeEnv === 'development' && { stack: err.stack }),
  };

  res.status(statusCode).json(response);
};

module.exports = errorHandler;
