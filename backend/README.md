# Backend API

A scalable Node.js backend application built with Express.js, following best practices and modern development standards.

## Features

- ✅ Express.js web framework
- ✅ Environment-based configuration
- ✅ Comprehensive error handling
- ✅ Request logging with Winston
- ✅ Security middleware (Helmet, CORS, Rate Limiting)
- ✅ Code quality tools (ESLint, Prettier)
- ✅ Modular architecture
- ✅ Health check endpoints

## Prerequisites

- Node.js >= 14.0.0
- npm or yarn

## Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

5. Configure your environment variables in `.env`

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| NODE_ENV | Environment mode (development/production) | development | No |
| PORT | Server port | 3000 | No |
| API_VERSION | API version prefix | v1 | No |
| LOG_LEVEL | Logging level (error/warn/info/debug) | info | No |

## Usage

### Development Mode

Start the server with auto-reload on file changes:

```bash
npm run dev
```

### Production Mode

Start the server in production mode:

```bash
npm start
```

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

Fix ESLint issues automatically:

```bash
npm run lint:fix
```

Format code with Prettier:

```bash
npm run format
```

## API Endpoints

### Health Check

**GET** `/health`

Returns server health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "development"
}
```

### API Status

**GET** `/api/v1/status`

Returns API version and status information.

**Response:**
```json
{
  "success": true,
  "data": {
    "version": "1.0.0",
    "status": "running",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

## Project Structure

```
backend/
├── logs/                   # Application logs (auto-generated)
├── src/
│   ├── config/            # Configuration files
│   │   └── index.js       # Centralized config management
│   ├── controllers/       # Request handlers
│   │   └── healthController.js
│   ├── middleware/        # Custom middleware
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   ├── models/            # Database models (future)
│   ├── routes/            # Route definitions
│   │   ├── index.js       # Main router
│   │   └── healthRoute.js
│   ├── services/          # Business logic (future)
│   ├── utils/             # Utility functions
│   │   ├── AppError.js    # Custom error class
│   │   └── logger.js      # Winston logger config
│   ├── validators/        # Input validation (future)
│   ├── app.js             # Express app configuration
│   └── server.js          # Server entry point
├── .env.example           # Environment variables template
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore patterns
├── .prettierrc            # Prettier configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## Architecture

The application follows a modular, layered architecture:

1. **Routes Layer**: Defines API endpoints and maps them to controllers
2. **Controllers Layer**: Handles HTTP requests and responses
3. **Services Layer**: Contains business logic (to be implemented)
4. **Models Layer**: Database models and schemas (to be implemented)
5. **Middleware Layer**: Request processing, error handling, validation
6. **Utils Layer**: Helper functions and utilities

## Error Handling

The application uses a centralized error handling approach:

- Custom `AppError` class for operational errors
- Global error handler middleware
- Proper error logging with Winston
- Environment-specific error responses

## Logging

Winston logger with daily rotating files:

- Error logs: `logs/error-YYYY-MM-DD.log`
- Combined logs: `logs/combined-YYYY-MM-DD.log`
- Console output in development mode
- Automatic log rotation (14 days retention, 20MB max size)

## Security

Security measures implemented:

- **Helmet**: Sets security-related HTTP headers
- **CORS**: Configurable cross-origin resource sharing
- **Rate Limiting**: Prevents abuse (100 requests per 15 minutes per IP)
- **Input Validation**: Request body size limits (10MB)
- **Error Handling**: No sensitive information in production errors

## Best Practices

- ✅ Environment-based configuration
- ✅ Separation of concerns
- ✅ Error handling and logging
- ✅ Code formatting and linting
- ✅ Security middleware
- ✅ Modular structure
- ✅ Graceful shutdown handling
- ✅ Process error handling

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Authentication and authorization
- [ ] Input validation with Joi/express-validator
- [ ] Unit and integration tests
- [ ] API documentation with Swagger
- [ ] Docker containerization
- [ ] CI/CD pipeline

## Contributing

1. Follow the existing code style
2. Run linter before committing: `npm run lint:fix`
3. Format code: `npm run format`
4. Write meaningful commit messages

## License

ISC
