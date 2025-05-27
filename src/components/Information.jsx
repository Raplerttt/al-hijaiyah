import React from 'react';
import { Link } from 'react-router-dom';

const Information = () => {
  return (
    <div className="flex-grow px-2 py-10 justify-center items-center">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Layanan Informasi
        </h2>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6 text-center items-stretch">
          {/* Item 1 - Kiri */}
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm flex-1 max-w-md flex flex-col">
            <img src="https://www.svgrepo.com/show/530442/port-detection.svg" alt="Icon Pengumuman" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Pengumuman Hasil Seleksi</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Informasi terbaru mengenai hasil seleksi masuk sekolah dan kegiatan akademik lainnya.
            </p>
            <Link
              to="/information/hasil-seleksi"
              aria-label="Lihat detail Pengumuman Hasil Seleksi"
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mx-auto inline-block"
            >
              Lihat Detail
            </Link>
          </div>
          
          {/* Item 2 - Kanan */}
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm flex-1 max-w-md flex flex-col">
            <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="Icon Pembayaran" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Pembayaran SPP</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Panduan dan informasi terkait tata cara pembayaran SPP serta jadwal pembayaran.
            </p>
            <Link
              to="/information/spp"
              aria-label="Lihat detail Pembayaran SPP"
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mx-auto"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
