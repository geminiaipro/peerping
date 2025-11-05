import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from '../../../lib/db';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method === 'GET') {
    const { serviceId } = request.query;

    if (!serviceId) {
      return response.status(400).json({ error: 'Missing serviceId' });
    }

    try {
      const client = await pool.connect();
      const result = await client.query(
        'SELECT * FROM pings WHERE service_id = $1 ORDER BY created_at DESC LIMIT 1',
        [serviceId]
      );
      client.release();

      if (result.rows.length === 0) {
        return response.status(404).json({ error: 'No data found for this service' });
      }

      return response.status(200).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    response.setHeader('Allow', ['GET']);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
