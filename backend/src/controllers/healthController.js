const config = require('../config');

/**
 * Health check endpoint handler
 * Returns server health status with uptime and environment info
 */
const healthCheck = (req, res) => {
  const healthData = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.nodeEnv,
  };

  res.status(200).json(healthData);
};

/**
 * API health check endpoint handler
 * Returns API version and running status
 */
const apiHealth = (req, res) => {
  const healthData = {
    success: true,
    message: 'API is running',
    version: config.appVersion,
  };

  res.status(200).json(healthData);
};

module.exports = {
  healthCheck,
  apiHealth,
};
