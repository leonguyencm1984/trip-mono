import 'reflect-metadata';
import express, { Application, RequestHandler } from 'express';
import { createConnection } from 'typeorm';
import { setRoutes } from './routes';
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import swaggerOptions from './config/swagger';
import { connectKafka } from './config/kafka';
import logger from './config/logger';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve as unknown as RequestHandler[]);
app.get('/api-docs', swaggerUi.setup(swaggerSpec) as unknown as RequestHandler);

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Database connection
createConnection({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'trip_builder',
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, 'entities/**/*.ts')],
  migrations: [path.join(__dirname, 'migration/**/*.ts')],
  subscribers: [path.join(__dirname, 'subscriber/**/*.ts')],
}).then(async () => {
  // Set up routes
  setRoutes(app);

  // Connect to Kafka
  await connectKafka();

  // Start server
  app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
    logger.info(`API documentation available at http://localhost:${PORT}/api-docs`);
  });
}).catch(error => {
  logger.error('Database connection error:', error);
}); 