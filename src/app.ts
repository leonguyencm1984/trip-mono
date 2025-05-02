import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { setRoutes } from './routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import swaggerOptions from './config/swagger';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nguyenna2',
  password: '1234qwer',
  database: 'sample_db',
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, 'entities/**/*.ts')],
  migrations: [path.join(__dirname, 'migration/**/*.ts')],
  subscribers: [path.join(__dirname, 'subscriber/**/*.ts')],
}).then(() => {
  setRoutes(app);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(error => console.log(error));