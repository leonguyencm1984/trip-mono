import { Request, Response } from 'express';

export class TripController {
  public async getAllTrips(req: Request, res: Response) {
    // TODO: Implement get all trips logic
    res.status(200).json({ message: 'Get all trips endpoint' });
  }

  public async createTrip(req: Request, res: Response) {
    const { name, description, startDate, endDate } = req.body;
    
    // TODO: Implement create trip logic
    res.status(201).json({ message: 'Create trip endpoint' });
  }
} 