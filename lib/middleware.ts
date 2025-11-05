import { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import pool from './db';

interface AuthenticatedRequest extends VercelRequest {
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

type VercelHandler = (req: AuthenticatedRequest, res: VercelResponse) => Promise<void>;

export const withAuth = (handler: VercelHandler) => async (req: AuthenticatedRequest, res: VercelResponse) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  let client;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: number };
    client = await pool.connect();
    const result = await client.query('SELECT id, name, email FROM users WHERE id = $1', [decoded.userId]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = result.rows[0];
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  } finally {
    if (client) {
      client.release();
    }
  }
};
