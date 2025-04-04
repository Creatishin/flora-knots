import React from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col overflow-hidden">
      <NavBar />
      <main className="px-2 md:px-6 py-6 flex-1 overflow-auto w-full flex justify-center">
        <div className="max-w-[1500px] mb-4 w-full">
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
