import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex items-center gap-4">
        {/* Gambar logo */}
        <img src="/src/assets/yayasan.jpg" alt="Logo Yayasan" className="h-12 w-auto object-contain" />
        {/* Judul */}
        <Link to="/" className="text-xl font-semibold text-green-700">Pondok Pesantren Modern Al-Hijaiyah</Link>
      </div>

      {/* Hamburger menu untuk mobile */}
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      {/* Menu Navigasi */}
      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li><Link className="md:p-4 py-3 px-0 block" to="/">Beranda</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block" to="/program">Program</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block" to="/seleksi">Seleksi</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block" to="/information">Informasi</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
