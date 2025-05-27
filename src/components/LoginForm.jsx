import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State untuk menentukan mode (login/register)
  const navigate = useNavigate(); // Hook untuk navigasi

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle antara login dan register
  };

  const handleLogin = () => {
    // Logika untuk login (misalnya, validasi dan autentikasi)
    // Setelah login berhasil, arahkan ke halaman dashboard
    navigate('/'); // Ganti dengan path yang sesuai setelah login
  };

  const handleRegister = () => {
    // Logika untuk registrasi (misalnya, validasi dan pendaftaran)
    // Setelah registrasi berhasil, arahkan ke halaman login
    navigate('/login'); // Ganti dengan path yang sesuai setelah registrasi
  };

  return (
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-bold mb-8 text-center">{isLogin ? 'Login' : 'Register'}</h1>
          <form>
            {isLogin ? (
              <>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <a className="text-gray-600 hover:text-gray-800" href="#">
                    Forgot your password?
                  </a>
                </div>
                <div className="mb-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleLogin} // Panggil fungsi login
                  >
                    Login
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="name">
                    Nama
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Masukkan nama"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="emailRegister">
                    Email
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="emailRegister"
                    type="email"
                    placeholder="Masukkan email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="phone">
                    Nomor Telepon
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text -gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="address">
                    Alamat
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Masukkan alamat"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="education">
                    Jenjang Pendidikan
                  </label>
                  <select
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="education"
                  >
                    <option value="">Pilih jenjang pendidikan</option>
                    <option value="sd">Sekolah Dasar</option>
                    <option value="smp">Sekolah Menengah Pertama</option>
                    <option value="sma">Sekolah Menengah Atas</option>
                    <option value="universitas">Universitas</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2" htmlFor="passwordRegister">
                    Password
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="passwordRegister"
                    type="password"
                    placeholder="Masukkan password"
                  />
                </div>
                <div className="mb-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleRegister} // Panggil fungsi register
                  >
                    Register
                  </button>
                </div>
              </>
            )}
            <div className="text-center">
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700 underline"
                onClick={toggleForm}
              >
                {isLogin ? 'Create an account' : 'Already have an account? Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;