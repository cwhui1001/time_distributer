import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Check login on mount (optional - storing session)
  useEffect(() => {
    // Determine status on load
    fetch('/maintenance.json')
      .then(res => res.json())
      .then(data => setMaintenanceMode(data.maintenance_mode))
      .catch(err => console.error(err));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a simple client-side check for the UI, 
    // real security is handled by the PHP script which needs the key sent every time.
    if (password) {
        setIsAuthenticated(true);
    }
  };

  const toggleMaintenance = async (newState: boolean) => {
    setStatusMessage('Updating...');
    try {
      const res = await fetch('/toggle-maintenance.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: password, // key used as password
          maintenance_mode: newState
        }),
      });

      const data = await res.json();
      
      if (res.ok && data.status === 'success') {
        setMaintenanceMode(newState);
        setStatusMessage(newState ? 'Maintenance Mode ACTIVATED' : 'Maintenance Mode DEACTIVATED');
      } else {
        setStatusMessage('Error: ' + (data.message || 'Failed'));
        if (res.status === 401) setIsAuthenticated(false);
      }
    } catch (error) {
      setStatusMessage('Network Error');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Head><title>Admin Login</title></Head>
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter Admin Key"
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-purple-700 text-white p-3 rounded font-bold hover:bg-purple-800">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20">
      <Head><title>Site Management</title></Head>
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Site Management</h1>
        <p className="text-gray-500 mb-8">Manage your website status</p>

        <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg border">
          <div>
            <h2 className="font-bold text-lg text-gray-800">Maintenance Mode</h2>
            <p className="text-sm text-gray-500">
              {maintenanceMode ? 'Website is currently OFFLINE' : 'Website is currently ONLINE'}
            </p>
          </div>
          
          <button 
            onClick={() => toggleMaintenance(!maintenanceMode)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
              maintenanceMode ? 'bg-red-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`${
                maintenanceMode ? 'translate-x-7' : 'translate-x-1'
              } inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ease-in-out shadow`}
            />
          </button>
        </div>

        {statusMessage && (
          <div className="mt-6 p-4 rounded bg-blue-50 text-blue-800 text-center font-medium">
            {statusMessage}
          </div>
        )}

        <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-gray-400 text-center">Current key: {password}</p>
        </div>
      </div>
    </div>
  );
}
