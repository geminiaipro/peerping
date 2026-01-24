import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from '../../lib/db';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method === 'POST') {
    // The API key from the peer is the peerId
    const peerId = request.headers['x-api-key'];
    const { latency, status } = request.body;

    if (!peerId || !latency || !status) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    if (Array.isArray(peerId)) {
        return response.status(400).json({ error: 'Invalid API key format' });
    }

    let client;
    try {
      client = await pool.connect();

      // Verify the peer exists
      const peerResult = await client.query('SELECT id FROM peers WHERE id = $1', [peerId]);
      if (peerResult.rows.length === 0) {
        return response.status(401).json({ error: 'Invalid API Key' });
      }

      await client.query(
        'INSERT INTO pings (peer_id, latency, status) VALUES ($1, $2, $3)',
        [peerId, latency, status]
      );
      return response.status(200).json({ message: 'Ping data saved' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    } finally {
      if (client) {
        client.release();
      }
    }
  } else {
    response.setHeader('Allow', ['POST']);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
