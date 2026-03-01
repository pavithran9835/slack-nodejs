const express = require('express');
const healthController = require('../controllers/healthController');

const router = express.Router();

/**
 * Health check routes
 */

// GET /health - Basic health check
router.get('/health', healthController.healthCheck);

// GET /api/v1/health - API health status with version info
router.get('/api/v1/health', healthController.apiHealth);

module.exports = router;
