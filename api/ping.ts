import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from '../../lib/db';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method === 'POST') {
    const { serviceId, latency, status } = request.body;

    if (!serviceId || !latency || !status) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const client = await pool.connect();
      await client.query(
        'INSERT INTO pings (service_id, latency, status) VALUES ($1, $2, $3)',
        [serviceId, latency, status]
      );
      client.release();
      return response.status(200).json({ message: 'Ping data saved' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    response.setHeader('Allow', ['POST']);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
