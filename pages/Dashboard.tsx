import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Peer {
  id: string;
  url: string;
  frequency: number;
  timeout: number;
  location: string;
}

const Dashboard = () => {
  const [peers, setPeers] = useState<Peer[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/peers', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch peers');
        }

        const data = await response.json();
        setPeers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPeers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">PeerPing</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Your Peers</h2>
        {error && <p className="text-red-600">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {peers.map((peer) => (
            <div key={peer.id} className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold">{peer.url}</p>
              <p>ID: {peer.id}</p>
              <p>Frequency: {peer.frequency}s</p>
              <p>Timeout: {peer.timeout}s</p>
              <p>Location: {peer.location || 'N/A'}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
