const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const config = require('./config');
const logger = require('./utils/logger');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

/**
 * Create Express application
 */
const app = express();

/**
 * Security middleware - Helmet helps secure Express apps by setting HTTP headers
 */
app.use(helmet());

/**
 * CORS middleware - Enable Cross-Origin Resource Sharing
 */
app.use(cors());

/**
 * Compression middleware - Compress response bodies
 */
app.use(compression());

/**
 * Body parser middleware - Parse JSON request bodies
 */
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

/**
 * HTTP request logger middleware
 */
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(
    morgan('combined', {
      stream: {
        write: (message) => logger.info(message.trim()),
      },
    })
  );
}

/**
 * Rate limiting middleware - Limit repeated requests to public APIs
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

/**
 * Mount all routes
 */
app.use('/', routes);

/**
 * 404 handler - Must be after all other routes
 */
app.use(notFound);

/**
 * Global error handler - Must be last middleware
 */
app.use(errorHandler);

module.exports = app;
