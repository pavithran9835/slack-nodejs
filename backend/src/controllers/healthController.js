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
 * API status endpoint handler
 * Returns API version and status information
 */
const apiStatus = (req, res) => {
  const statusData = {
    success: true,
    data: {
      version: config.appVersion,
      status: 'running',
      timestamp: new Date().toISOString(),
    },
  };

  res.status(200).json(statusData);
};

module.exports = {
  healthCheck,
  apiStatus,
};
