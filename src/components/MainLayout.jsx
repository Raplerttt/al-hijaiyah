import React from 'react';
import Header from './Header';
import Footer from './Footer'; // Pastikan Anda membuat komponen Footer juga

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;