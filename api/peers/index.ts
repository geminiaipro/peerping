import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from '../../../lib/db';
import { withAuth } from '../../../lib/middleware';
import { nanoid } from 'nanoid';

async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method === 'POST') {
    const { url, frequency, timeout, location } = request.body;

    if (!url || !frequency || !timeout) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    const userId = request.user.id;
    const peerId = nanoid(12);

    let client;
    try {
      client = await pool.connect();
      await client.query(
        'INSERT INTO peers (id, user_id, url, frequency, timeout, location) VALUES ($1, $2, $3, $4, $5, $6)',
        [peerId, userId, url, frequency, timeout, location]
      );

      return response.status(201).json({ peerId });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    } finally {
      if (client) {
        client.release();
      }
    }
  } else if (request.method === 'GET') {
    const userId = request.user.id;

    let client;
    try {
      client = await pool.connect();
      const result = await client.query('SELECT * FROM peers WHERE user_id = $1', [userId]);

      return response.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    } finally {
      if (client) {
        client.release();
      }
    }
  } else {
    response.setHeader('Allow', ['POST', 'GET']);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}

export default withAuth(handler);
