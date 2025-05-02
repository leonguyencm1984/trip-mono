import { Request, Response } from 'express';
import { RegisterDTO, User } from '@trip-mono/trip-shared/dist/users';
import * as bcrypt from 'bcrypt';
import logger from '../config/logger';

interface ValidationError {
  type: 'field';
  path: string;
  msg: string;
}

export class AuthController {

  public async register(req: Request, res: Response) {
      const { email, password, confirmPassword } = req.body;

      const encryptedPwd = await bcrypt.hash(password, 10);
      // Create new user
      const user = new RegisterDTO(email, encryptedPwd, encryptedPwd);

      // Return success response
      return res.status(201).json({
        message: 'User registered successfully',
      });
  }
} 