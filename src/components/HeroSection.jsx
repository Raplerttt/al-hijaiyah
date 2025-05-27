import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white py-24 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="md:w-1/2 space-y-6 animate-fadeInLeft">
          <h2 className="text-5xl font-extrabold leading-tight drop-shadow-md">
            Selamat datang di <br /> Pondok Pesantren Modern Al-Hijaiyah
          </h2>
          <p className="text-xl max-w-md drop-shadow-sm">
            Kami menyediakan berbagai layanan pendidikan dan pengembangan untuk membantu Anda meraih tujuan hidup yang bermakna.
          </p>
          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-green-100 transition">
            Hubungi Kami
          </button>
        </div>
        <div className="md:w-1/2 animate-fadeInRight">
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80"
            alt="Hero Image"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Animations using TailwindCSS plugin or custom styles */}
      <style jsx>{`
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
