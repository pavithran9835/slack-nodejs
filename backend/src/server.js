const app = require('./app');
const config = require('./config');
const logger = require('./utils/logger');

/**
 * Normalize port into a number, string, or false
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const port = normalizePort(config.port);

/**
 * Start the server
 */
const server = app.listen(port, () => {
  logger.info(`
    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║   Server is running!                                  ║
    ║                                                       ║
    ║   Environment: ${config.nodeEnv.padEnd(38)}║
    ║   Port:        ${port.toString().padEnd(38)}║
    ║   Version:     ${config.appVersion.padEnd(38)}║
    ║                                                       ║
    ║   Health:      http://localhost:${port}/health${' '.repeat(17)}║
    ║   API Status:  http://localhost:${port}/api/v1/status${' '.repeat(8)}║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝
  `);
});

/**
 * Handle unhandled promise rejections
 */
process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION! 💥 Shutting down...', {
    error: err.message,
    stack: err.stack,
  });
  server.close(() => {
    process.exit(1);
  });
});

/**
 * Handle uncaught exceptions
 */
process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...', {
    error: err.message,
    stack: err.stack,
  });
  process.exit(1);
});

/**
 * Handle SIGTERM signal
 */
process.on('SIGTERM', () => {
  logger.info('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    logger.info('💥 Process terminated!');
  });
});

module.exports = server;
