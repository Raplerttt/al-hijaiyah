import React from 'react';
import { Link } from 'react-router-dom';

const ProgramPendidikan = () => {
  return (
    <div className="bg-gray-200 px-2 py-10 justify-center">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Program Pendidikan
        </h2>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6 text-center items-stretch">
          {/* Item 1 - Kiri */}
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm flex-1 max-w-md flex flex-col">
            <img src="https://www.svgrepo.com/show/530442/port-detection.svg" alt="Icon Port Detection" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Mts Al-Hijaiyah</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Jenjang pendidikan formal yang setara dengan Sekolah Menengah Pertama (SMP)
            </p>
            <Link
              to="/seleksi/form-pendaftaran"
              aria-label="Lihat detail Mts Al-Hijaiyah"
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mx-auto transform hover:scale-105"
            >
              Lihat Detail
            </Link>
          </div>
          
          {/* Item 2 - Kanan */}
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm flex-1 max-w-md flex flex-col">
            <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="Icon Availability" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">SMA plus Al-Hijaiyah</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Jenjang pendidikan formal yang setara dengan Sekolah Menengah Kejuruan (SMA/SMK)
            </p>
            <Link
              to="/seleksi/form-pendaftaran"
              aria-label="Lihat detail Mts Al-Hijaiyah"
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mx-auto transform hover:scale-105"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPendidikan;
