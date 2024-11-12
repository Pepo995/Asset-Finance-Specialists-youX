'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Asset Finance Specialists</div>
      <div className="space-x-4">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="text-white px-4 py-2 bg-red-500 rounded hover:bg-red-600">
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => router.push('/login')}
              className="text-white px-4 py-2 bg-green-500 rounded hover:bg-green-600"
            >
              Login
            </button>
            <button
              onClick={() => router.push('/register')}
              className="text-white px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600"
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
