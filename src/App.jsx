import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import DashboardPages from './pages/DashboardPages';
import LoginRegisterForm from './components/LoginForm';
import MainLayout from './components/MainLayout';
import RegistrationForm from './components/RegistrasiForm';
import ProgramPages from './pages/ProgramPages';

// Pastikan import halaman ini sesuai path yang benar
import InformasiPages from './pages/InformationPages';
import HasilSeleksi from './pages/HasilSeleksi';
import InformasiPembayaranSPP from './pages/InformasiPembayaranSpp';

//SELEKSI PAGES
import SeleksiPages from './pages/SeleksiPages';
import FormPendaftaran from './components/FormPendaftaran';
function App() {
  const location = useLocation(); // Mengambil lokasi saat ini

  // Menentukan apakah akan menampilkan MainLayout atau tidak
  const showMainLayout = !['/login', '/register'].includes(location.pathname);

  return (
    <>
      {showMainLayout ? (
        <MainLayout>
          <Routes>
            <Route path="/" element={<DashboardPages />} />
            <Route path="/program" element={<ProgramPages />} />
            <Route path="/seleksi/*" element={<SelektionPages />} />
            <Route path="/information/*" element={<InformationPages />} />
          </Routes>
        </MainLayout>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginRegisterForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      )}
    </>
  );
}

const InformationPages = () => {
  return (
    <Routes>
      <Route path="/" element={<InformasiPages />} />
      <Route path="hasil-seleksi" element={<HasilSeleksi />} />
      <Route path="spp" element={<InformasiPembayaranSPP />} />
    </Routes>
  );
};

const SelektionPages = () => {
  return (
    <Routes>
    <Route path="/" element={<SeleksiPages />} />
    <Route path="form-pendaftaran" element={<FormPendaftaran />} />
    </Routes>
  )
};

// Membungkus App dengan Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
