import { Request, Response } from 'express';
import { User } from 'shared-models/users';

export class IndexController {
  /**
   * @swagger
   * /:
   *   get:
   *     summary: Get welcome message
   *     description: Returns a welcome message with a sample user
   *     tags: [Index]
   *     responses:
   *       200:
   *         description: Welcome message returned successfully
   *         content:
   *           text/plain:
   *             schema:
   *               type: string
   *               example: Welcome to the Express API, John Doe!
   */
  public getIndex(req: Request, res: Response): void {
    const user = new User(1, 'John Doe', 'john.doe@example.com');
    res.send(`Welcome to the Express API, ${user.name}!`);
  }
}