import { Application } from 'express';
import authRoutes from './auth.routes';
import tripRoutes from './trip.routes';

export const setRoutes = (app: Application) => {
  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // API routes
  app.use('/api/auth', authRoutes);
  app.use('/api/trips', tripRoutes);
}; 