import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-6">
        <Header />
        <main className="mt-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;