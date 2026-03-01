const dotenv = require('dotenv');
const path = require('path');

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: path.join(__dirname, '../../.env') });

/**
 * Centralized configuration object
 * All configuration values are loaded from environment variables
 */
const config = {
  // Environment
  nodeEnv: process.env.NODE_ENV || 'development',

  // Server
  port: parseInt(process.env.PORT, 10) || 3000,

  // API
  apiVersion: process.env.API_VERSION || 'v1',

  // Logging
  logLevel: process.env.LOG_LEVEL || 'info',

  // Application
  appName: 'Backend API',
  appVersion: '1.0.0',
};

module.exports = config;
