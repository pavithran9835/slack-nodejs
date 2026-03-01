const express = require('express');
const healthRoute = require('./healthRoute');

const router = express.Router();

/**
 * Main router that aggregates all route modules
 */

// Mount health routes at root level
router.use('/', healthRoute);

module.exports = router;
